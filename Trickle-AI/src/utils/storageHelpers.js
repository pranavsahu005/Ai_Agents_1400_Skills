const DB_NAME = 'TrickleDB';
const DB_VERSION = 1;

let dbPromise = null;

if (window.idb) {
  dbPromise = window.idb.openDB(DB_NAME, DB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains('Canvases')) {
        db.createObjectStore('Canvases', { keyPath: 'boardId' });
      }
      if (!db.objectStoreNames.contains('Snapshots')) {
        const snapStore = db.createObjectStore('Snapshots', { keyPath: 'id', autoIncrement: true });
        snapStore.createIndex('boardId', 'boardId');
        snapStore.createIndex('timestamp', 'timestamp');
      }
      if (!db.objectStoreNames.contains('Assets')) {
        db.createObjectStore('Assets', { keyPath: 'assetId' });
      }
    },
  });
}

window.storageHelpers = {
  // Boards Index (localStorage)
  getBoardsIndex: () => {
    try {
      const data = localStorage.getItem('trickle_boards_index');
      return data ? JSON.parse(data) : [];
    } catch (e) {
      return [];
    }
  },

  saveBoardsIndex: (boards) => {
    localStorage.setItem('trickle_boards_index', JSON.stringify(boards));
  },

  createBoard: async (name) => {
    const boardId = 'board_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    const newBoardMeta = {
      boardId,
      name,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      nodeCount: 0,
      thumbnailUrl: null
    };

    const boards = window.storageHelpers.getBoardsIndex();
    boards.push(newBoardMeta);
    window.storageHelpers.saveBoardsIndex(boards);

    const initialCanvasData = {
      boardId,
      viewport: { x: 50000, y: 50000, zoom: 1.0 },
      fabricData: { version: '5.3.1', objects: [] },
      nodesMetadata: {}
    };

    await window.storageHelpers.saveCanvasState(initialCanvasData);
    return newBoardMeta;
  },

  deleteBoard: async (boardId) => {
    let boards = window.storageHelpers.getBoardsIndex();
    boards = boards.filter(b => b.boardId !== boardId);
    window.storageHelpers.saveBoardsIndex(boards);

    if (dbPromise) {
      const db = await dbPromise;
      await db.delete('Canvases', boardId);
      // Optional: Delete snapshots for this board
    }
  },

  // Canvas State (IndexedDB)
  getCanvasState: async (boardId) => {
    if (!dbPromise) return null;
    const db = await dbPromise;
    return await db.get('Canvases', boardId);
  },

  saveCanvasState: async (canvasData) => {
    if (!dbPromise) return;
    const db = await dbPromise;
    await db.put('Canvases', canvasData);

    // Update metadata in localStorage index
    const boards = window.storageHelpers.getBoardsIndex();
    const idx = boards.findIndex(b => b.boardId === canvasData.boardId);
    if (idx !== -1) {
      boards[idx].updatedAt = new Date().toISOString();
      boards[idx].nodeCount = canvasData.fabricData?.objects?.length || 0;
      window.storageHelpers.saveBoardsIndex(boards);
    }
  },

  // Snapshots
  createSnapshot: async (boardId, canvasData) => {
    if (!dbPromise) return;
    const db = await dbPromise;
    await db.put('Snapshots', {
      boardId,
      timestamp: Date.now(),
      data: canvasData
    });

    // Prune old snapshots (keep last 10)
    const tx = db.transaction('Snapshots', 'readwrite');
    const index = tx.store.index('boardId');
    let cursor = await index.openCursor(IDBKeyRange.only(boardId), 'prev');
    let count = 0;
    while (cursor) {
      count++;
      if (count > 10) {
        await cursor.delete();
      }
      cursor = await cursor.continue();
    }
    await tx.done;
  }
};
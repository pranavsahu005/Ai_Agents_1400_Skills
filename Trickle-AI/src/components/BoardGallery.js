const { useState, useEffect } = React;

function BoardGallery({ onOpenBoard }) {
  const [boards, setBoards] = useState([]);

  useEffect(() => {
    // Load from local storage
    const loadedBoards = window.storageHelpers.getBoardsIndex();
    setBoards(loadedBoards);
  }, []);

  const handleCreateNew = async () => {
    const newBoard = await window.storageHelpers.createBoard("Untitled Vision");
    setBoards([...boards, newBoard]);
    onOpenBoard(newBoard.boardId);
  };

  const handleDelete = async (e, boardId) => {
    e.stopPropagation();
    await window.storageHelpers.deleteBoard(boardId);
    setBoards(boards.filter(b => b.boardId !== boardId));
  }

  return (
    <div className="w-full h-full overflow-y-auto p-10 flex flex-col bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto w-full">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="text-4xl font-display font-bold mb-2">Trickle AI Workspace</h1>
            <p className="opacity-70">Your ideas, your life — all in one place.</p>
          </div>
          <button
            onClick={handleCreateNew}
            className="bg-purple-600 hover:bg-purple-500 text-white px-6 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105"
          >
            <i className="fa-solid fa-plus mr-2"></i> New Canvas
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {boards.length === 0 && (
            <div className="col-span-full py-20 text-center opacity-50 border-2 border-dashed border-white/20 rounded-xl">
              No boards yet. Start by creating a new canvas!
            </div>
          )}

          {boards.map(board => (
            <div
              key={board.boardId}
              onClick={() => onOpenBoard(board.boardId)}
              className="glass-panel aspect-video rounded-xl overflow-hidden cursor-pointer group hover:border-purple-500 transition-colors relative"
            >
              <div className="w-full h-2/3 bg-black/40 flex items-center justify-center">
                {/* Thumbnail placeholder */}
                <i className="fa-regular fa-image text-4xl opacity-20"></i>
              </div>
              <div className="p-4 bg-white/5 backdrop-blur">
                <h3 className="font-bold truncate">{board.name}</h3>
                <p className="text-xs opacity-60 mt-1">{new Date(board.updatedAt).toLocaleDateString()}</p>
              </div>

              <button
                onClick={(e) => handleDelete(e, board.boardId)}
                className="absolute top-2 right-2 w-8 h-8 rounded-full bg-red-500/80 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-500"
              >
                <i className="fa-solid fa-trash text-sm"></i>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

window.BoardGallery = BoardGallery;
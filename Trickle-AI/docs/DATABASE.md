# Trickle AI - Database & Data Architecture

## 1. Persistence Strategy
Trickle AI relies on robust client-side storage to ensure zero data loss without requiring immediate server syncing or accounts.
- **IndexedDB:** Used for heavy data payload (Canvas JSON, base64 images, audio array buffers).
- **localStorage:** Used for lightweight metadata (User preferences, theme selection, board index list).

## 2. Data Schemas

### 2.1 Board Metadata (Stored in `localStorage: 'trickle_boards_index'`)
An array of board summary objects used to render the Home Screen quickly without loading full canvas data.
```json
{
  "boardId": "uuid-1234",
  "name": "My 2025 Vision",
  "createdAt": "2024-05-12T10:00:00Z",
  "updatedAt": "2024-05-12T14:30:00Z",
  "nodeCount": 42,
  "thumbnailUrl": "data:image/jpeg;base64,...", // Heavily downsampled mini preview
  "folderId": null
}
```

### 2.2 Canvas State (Stored in `IndexedDB: 'TrickleDB' -> Store: 'Canvases'`)
The complete state of a specific board.
```json
{
  "boardId": "uuid-1234",
  "viewport": {
    "x": 50000,
    "y": 50000,
    "zoom": 1.0
  },
  "fabricData": {
    "version": "5.3.1",
    "objects": [ ... ] // Serialized Fabric.js objects (Smart Nodes, Connectors)
  },
  "nodesMetadata": {
    "node-uuid-1": {
      "notes": "<p>Rich text notes here</p>",
      "tasks": [{ "id": 1, "text": "Do this", "completed": false }],
      "links": ["https://example.com"],
      "media": ["asset-uuid-1", "asset-uuid-2"],
      "history": [ ... ]
    }
  },
  "sections": [
    { "id": "sec-1", "name": "Work", "bounds": { "x": 0, "y": 0, "w": 1000, "h": 1000 }, "color": "#ff0000" }
  ]
}
```

### 2.3 Asset Library (Stored in `IndexedDB: 'TrickleDB' -> Store: 'Assets'`)
User-uploaded media files to avoid duplicating large binary strings inside the canvas JSON.
```json
{
  "assetId": "asset-uuid-1",
  "type": "image/jpeg",
  "name": "vacation.jpg",
  "tags": ["travel", "2024"],
  "uploadedAt": "2024-05-12T10:05:00Z",
  "dataBlob": "<ArrayBuffer or Blob reference>"
}
```

## 3. Auto-Save & Versioning Architecture
- **Debounce:** Any mutation to the Fabric canvas or Node metadata triggers an auto-save queue, debounced by 500ms.
- **Transaction:** The save operation updates the `Canvases` store in IndexedDB and updates the timestamp/thumbnail in the `localStorage` index.
- **Versioning:**
  - On the first save of a new session, or every 10 minutes of active editing, a deep copy of the Canvas State is saved to `IndexedDB: 'TrickleDB' -> Store: 'Snapshots'`.
  - The Snapshot store maintains a strict limit of 50 versions per `boardId`, utilizing a FIFO pruning mechanism.
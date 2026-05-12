const { useState, useEffect, useCallback, useMemo } = React;

function App() {
  const [currentBoard, setCurrentBoard] = useState(null);
  const [mode, setMode] = useState('life'); // 'life' or 'flow'
  const [theme, setTheme] = useState('aurora');
  const [selectedNode, setSelectedNode] = useState(null);

  useEffect(() => {
    // Set theme class on body
    document.body.className = `theme-${theme} font-sans overflow-hidden w-screen h-screen m-0 p-0`;
  }, [theme]);

  const handleOpenBoard = useCallback((boardId) => {
    setCurrentBoard(boardId);
  }, []);

  const handleReturnToGallery = useCallback(() => {
    setCurrentBoard(null);
    setSelectedNode(null);
  }, []);

  if (!currentBoard) {
    return <BoardGallery onOpenBoard={handleOpenBoard} />;
  }

  return (
    <div className={`w-full h-full relative flex flex-col bg-[var(--bg-color)] text-[var(--text-color)]`}>
      {/* Top Nav */}
      <div className="absolute top-4 left-0 w-full flex justify-between items-center px-6 z-50 pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          <button
            onClick={handleReturnToGallery}
            className="w-10 h-10 rounded-full glass-panel flex items-center justify-center hover:scale-105 transition-transform"
            title="Return to Gallery"
          >
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <div className="glass-panel px-4 py-2 font-display font-bold text-lg rounded-full">
            My Vision Board
          </div>
        </div>

        <div className="pointer-events-auto">
          <ModeToggle mode={mode} setMode={setMode} />
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="glass-panel px-4 py-2 rounded-full text-sm opacity-80">
            Saved 2 mins ago
          </div>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="flex-1 relative w-full h-full">
        <TrickleCanvas
          boardId={currentBoard}
          mode={mode}
          onNodeSelect={setSelectedNode}
        />
      </div>

      {/* Slide-out Node Panel */}
      <NodePanel
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
      />

      {/* Bottom Floating Toolbar */}
      <FloatingToolbar mode={mode} />

    </div>
  );
}

window.App = App;
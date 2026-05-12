function ModeToggle({ mode, setMode }) {
  return (
    <div className="glass-panel p-1 rounded-full flex gap-1 pointer-events-auto">
      <button
        onClick={() => setMode('life')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${mode === 'life' ? 'bg-white text-black shadow-md' : 'text-white/70 hover:text-white'}`}
      >
        <i className="fa-solid fa-paintbrush mr-2"></i> Life Canvas
      </button>
      <button
        onClick={() => setMode('flow')}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${mode === 'flow' ? 'bg-black text-white shadow-md' : 'text-white/70 hover:text-white'}`}
      >
        <i className="fa-solid fa-code-branch mr-2"></i> Flow Map
      </button>
    </div>
  );
}

window.ModeToggle = ModeToggle;
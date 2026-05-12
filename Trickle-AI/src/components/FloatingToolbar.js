const { useState, useCallback } = React;

function FloatingToolbar({ mode }) {
  const [tools, setTools] = useState([]);

  // Setup tools based on mode
  React.useEffect(() => {
    if (mode === 'life') {
      setTools([
        { id: 'select', icon: 'fa-arrow-pointer', title: 'Select' },
        { id: 'media', icon: 'fa-camera', title: 'Media' },
        { id: 'text', icon: 'fa-font', title: 'Text' },
        { id: 'journal', icon: 'fa-book', title: 'Journal' },
        { id: 'habit', icon: 'fa-circle-check', title: 'Habits' },
        { id: 'sticker', icon: 'fa-star', title: 'Stickers' },
        { id: 'gif', icon: 'fa-icons', title: 'GIFs' },
        { id: 'connect', icon: 'fa-link', title: 'Connect' }
      ]);
    } else {
      setTools([
        { id: 'select', icon: 'fa-arrow-pointer', title: 'Select' },
        { id: 'process', icon: 'fa-square', title: 'Process' },
        { id: 'decision', icon: 'fa-diamond', title: 'Decision' },
        { id: 'startend', icon: 'fa-circle', title: 'Start/End' },
        { id: 'text', icon: 'fa-font', title: 'Text' },
        { id: 'code', icon: 'fa-code', title: 'Code Block' },
        { id: 'api', icon: 'fa-server', title: 'API Card' },
        { id: 'connect', icon: 'fa-arrow-right', title: 'Connect' }
      ]);
    }
  }, [mode]);

  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50 pointer-events-auto">
      <div className="glass-pill px-6 py-3 flex items-center gap-4 transition-all duration-300">
        {tools.map(tool => (
          <button
            key={tool.id}
            className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-lg transition-transform hover:scale-110 tooltip-trigger relative group"
            title={tool.title}
          >
            <i className={`fa-solid ${tool.icon}`}></i>
            {/* Simple tooltip */}
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {tool.title}
            </span>
          </button>
        ))}

        <div className="w-px h-6 bg-white/20 mx-2"></div>

        <button className="w-10 h-10 rounded-full hover:bg-white/10 flex items-center justify-center text-lg">
          <i className="fa-solid fa-ellipsis-vertical"></i>
        </button>
      </div>
    </div>
  );
}

window.FloatingToolbar = FloatingToolbar;
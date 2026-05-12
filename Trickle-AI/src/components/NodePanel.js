const { useState, useEffect } = React;

function NodePanel({ node, onClose }) {
  const [activeTab, setActiveTab] = useState('notes');
  const [notes, setNotes] = useState('');

  // Load metadata when node changes
  useEffect(() => {
    if (node) {
      // In a real app, fetch metadata from storageHelpers using node.id
      setNotes('Mock rich text notes for ' + (node.id || 'new node'));
    }
  }, [node]);

  if (!node) return null;

  return (
    <div className="absolute right-0 top-0 w-80 h-full glass-panel border-l z-40 transform transition-transform translate-x-0 flex flex-col pointer-events-auto">
      <div className="flex justify-between items-center p-4 border-b border-white/10">
        <h3 className="font-display font-bold">Smart Node</h3>
        <button onClick={onClose} className="hover:text-red-400">
          <i className="fa-solid fa-xmark"></i>
        </button>
      </div>

      <div className="flex border-b border-white/10 text-sm">
        <button onClick={() => setActiveTab('content')} className={`flex-1 py-2 ${activeTab === 'content' ? 'bg-white/10' : ''}`}>Content</button>
        <button onClick={() => setActiveTab('notes')} className={`flex-1 py-2 ${activeTab === 'notes' ? 'bg-white/10' : ''}`}>Notes</button>
        <button onClick={() => setActiveTab('tasks')} className={`flex-1 py-2 ${activeTab === 'tasks' ? 'bg-white/10' : ''}`}>Tasks</button>
      </div>

      <div className="p-4 flex-1 overflow-y-auto">
        {activeTab === 'notes' && (
          <div className="flex flex-col gap-2 h-full">
            <label className="text-xs opacity-70">Rich Text Notes</label>
            <textarea
              className="flex-1 bg-black/20 rounded p-2 text-sm outline-none resize-none border border-white/5 focus:border-white/20"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
        )}

        {activeTab === 'tasks' && (
          <div className="flex flex-col gap-2">
             <div className="flex items-center gap-2">
               <input type="checkbox" className="rounded" />
               <input type="text" placeholder="New Task..." className="bg-transparent text-sm flex-1 outline-none border-b border-white/10 focus:border-white/30" />
             </div>
          </div>
        )}
      </div>
    </div>
  );
}

window.NodePanel = NodePanel;
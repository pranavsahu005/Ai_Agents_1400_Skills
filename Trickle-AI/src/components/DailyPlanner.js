const { useState } = React;

function DailyPlanner() {
  const [tasks, setTasks] = useState([
    { id: 1, text: 'Review PRs', done: true },
    { id: 2, text: 'Finish Phase 2 spec', done: false },
    { id: 3, text: 'Workout', done: false }
  ]);

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  return (
    <div className="glass-panel p-4 rounded-xl w-80 pointer-events-auto">
      <div className="text-center mb-4 border-b border-white/10 pb-2">
        <h2 className="font-display text-2xl font-bold">Today</h2>
        <p className="text-sm opacity-70">{new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
      </div>

      <div className="mb-4">
        <h4 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">Most Important Tasks</h4>
        <div className="space-y-2">
          {tasks.map(task => (
            <div key={task.id} className="flex items-center gap-3 bg-white/5 p-2 rounded hover:bg-white/10 transition-colors">
              <button
                onClick={() => toggleTask(task.id)}
                className={`w-5 h-5 rounded flex items-center justify-center border ${task.done ? 'bg-teal-500 border-teal-500' : 'border-white/30'}`}
              >
                {task.done && <i className="fa-solid fa-check text-white text-xs"></i>}
              </button>
              <span className={`text-sm ${task.done ? 'line-through opacity-50' : ''}`}>{task.text}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h4 className="text-xs font-bold uppercase tracking-wider opacity-50 mb-2">Intention</h4>
        <div className="bg-white/5 p-3 rounded text-sm italic border-l-2 border-purple-500">
          "Focus on making steady progress without burning out."
        </div>
      </div>
    </div>
  );
}

window.DailyPlanner = DailyPlanner;
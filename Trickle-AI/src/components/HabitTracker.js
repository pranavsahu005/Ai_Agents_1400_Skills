const { useState } = React;

function HabitTracker() {
  const [habits, setHabits] = useState([
    { id: 1, name: 'Read 10 pages', color: 'bg-purple-500', icon: 'fa-book', streak: 4, history: [true, true, false, true, true, false, false] },
    { id: 2, name: 'Drink Water', color: 'bg-teal-500', icon: 'fa-droplet', streak: 12, history: [true, true, true, true, true, true, true] }
  ]);

  const toggleHabit = (habitId, dayIndex) => {
    setHabits(habits.map(h => {
      if (h.id === habitId) {
        const newHistory = [...h.history];
        newHistory[dayIndex] = !newHistory[dayIndex];
        return { ...h, history: newHistory };
      }
      return h;
    }));
  };

  return (
    <div className="glass-panel p-4 rounded-xl w-80 pointer-events-auto">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-display font-bold text-lg"><i className="fa-solid fa-fire text-orange-500 mr-2"></i>Habit Tracker</h3>
        <button className="opacity-50 hover:opacity-100"><i className="fa-solid fa-plus"></i></button>
      </div>

      <div className="space-y-4">
        {habits.map(habit => (
          <div key={habit.id} className="flex flex-col gap-2">
            <div className="flex justify-between items-center text-sm">
              <span className="font-medium flex items-center gap-2"><i className={`fa-solid ${habit.icon} opacity-70`}></i> {habit.name}</span>
              <span className="text-xs opacity-70 bg-black/20 px-2 py-0.5 rounded-full">{habit.streak} day streak</span>
            </div>
            <div className="flex justify-between">
              {habit.history.map((done, i) => (
                <button
                  key={i}
                  onClick={() => toggleHabit(habit.id, i)}
                  className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all ${done ? habit.color : 'bg-black/20 hover:bg-white/10'}`}
                >
                  {done && <i className="fa-solid fa-check text-white text-xs"></i>}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

window.HabitTracker = HabitTracker;
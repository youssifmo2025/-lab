import { useState } from "react";
import { Trash2 } from "lucide-react";

function InventoryTask({ taskName }) {
  // State 1: Task Completion State
  const [isCompleted, setIsCompleted] = useState(false);

  // State 2: Task Visibility State
  const [isVisible, setIsVisible] = useState(true);

  // Conditional Rendering: If not visible, hide from screen (return null)
  if (!isVisible) {
    return null;
  }

  return (
    <div className="flex items-center justify-between p-3 bg-slate-50 border border-slate-200 rounded-lg hover:border-slate-300 transition-colors">
      {/* Checkbox and Task Name */}
      <label className="flex items-center gap-3 cursor-pointer select-none">
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={() => setIsCompleted((prev) => !prev)}
          className="w-4 h-4 text-indigo-600 rounded border-slate-300 focus:ring-indigo-500 cursor-pointer"
        />
        <span
          className={`text-sm font-medium ${
            isCompleted ? "line-through text-muted-foreground text-slate-400" : "text-slate-800"
          }`}
        >
          {taskName}
        </span>
      </label>

      {/* Delete Button with Trash2 Icon */}
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-md transition-colors cursor-pointer"
        title="Delete Task"
      >
        <Trash2 className="w-4 h-4" />
      </button>
    </div>
  );
}

export default InventoryTask;



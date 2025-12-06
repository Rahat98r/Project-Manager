import React from "react";
import NewTask from "./NewTask";

const Task = ({ onAddTask, onDeleteTask, tasks }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h1>

      <NewTask onAddTask={onAddTask} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any task yet
        </p>
      )}

      {tasks.length > 0 && (
        <ul className="p-4 mt-8 bg-stone-100 rounded-md">
          {tasks.map((task) => {
            return (
              <li
                key={task.id}
                className="flex items-center justify-between my-4"
              >
                <p>{task.text}</p>
                <span>
                  <button
                    className="text-stone-700 hover:text-red-500"
                    onClick={() => onDeleteTask(task.id)}
                  >
                    Clear
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Task;

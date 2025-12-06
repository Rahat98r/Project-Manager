import React, { useState } from "react";

const NewTask = ({ onAddTask }) => {
  const [tasktext, setTasktext] = useState("");
  const handleChange = (event) => {
    setTasktext(event.target.value);
  };
  const handleClick = () => {
    if (tasktext.trim() === "") {
      return;
    }
    onAddTask(tasktext);
    setTasktext("");
  };

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        onChange={handleChange}
        value={tasktext}
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
      />
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default NewTask;

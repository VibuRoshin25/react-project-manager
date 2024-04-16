import { useState } from "react";

const NewTask = ({ onAddTask, onDeleteTask }) => {
  const [enteredTask, setEnteredTask] = useState("");
  const handleChange = (event) => {
    setEnteredTask(event.target.value);
  };
  const handleClick = () => {
    onAddTask(enteredTask);
    setEnteredTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-teal-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-teal-700 hover:text-teal-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;

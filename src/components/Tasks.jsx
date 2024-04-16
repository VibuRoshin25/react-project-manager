import NewTask from "./NewTask";

const Tasks = ({ tasks, onAddTask, onDeleteTask }) => {
  return (
    <section>
      <h2 className="text-2xl font-bold text-teal-700 mb-4">Tasks</h2>
      <NewTask onAddTask={onAddTask} onDeleteTask={onDeleteTask} />
      {tasks.length === 0 && (
        <p className="text-teal-800 my-4 ">
          This project does not have any tasks yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-teal-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-teal-700 hover:text-red-500"
                onClick={onDeleteTask}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Tasks;
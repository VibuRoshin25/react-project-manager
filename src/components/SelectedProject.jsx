import Tasks from "./Tasks";
const SelectedProject = ({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) => {
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-teal-300">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-teal-600 mb-2">
            {project.title}
          </h1>
          <button
            onClick={onDelete}
            className="text-teal-600 hover:text-teal-950"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-teal-400">{project.dueDate}</p>
        <p className="text-teal-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks onAddTask={onAddTask} onDeleteTask={onDeleteTask} tasks={tasks} />
    </div>
  );
};

export default SelectedProject;

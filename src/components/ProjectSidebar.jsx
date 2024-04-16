import Button from "./Button";

const ProjectSidebar = ({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId,
}) => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-teal-900 text-teal-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-teal-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects.map((project) => {
          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1  hover:text-teal-200 hover:bg-teal-800";
          if (project.id === selectedProjectId) {
            cssClasses += " text-teal-200 bg-teal-800";
          } else {
            cssClasses += " text-teal-400";
          }
          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;

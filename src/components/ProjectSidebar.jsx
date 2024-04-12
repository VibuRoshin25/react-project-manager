import React from "react";

const ProjectSidebar = () => {
  return (
    <aside className="w-1/3 px-8 py-16 bg-teal-900 text-teal-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-teal-200">
        Your Projects
      </h2>
      <div>
        <button className="px-4 py-2 text-xs md:text-base rounded-md bg-teal-700 text-teal-400 hover:bg-teal-600 hover:text-teal-100">
          + Add Project
        </button>
      </div>
      <ul></ul>
    </aside>
  );
};

export default ProjectSidebar;

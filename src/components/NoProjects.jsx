import noProjectImage from "../assets/no-projects.png";
import Button from "./Button";
const NoProjects = ({ onStartAddProject }) => {
  return (
    <div>
      <img src={noProjectImage} className="w-16 h-16 object-contain mx-auto" />
      <h2 className="text-xl font-bold text-teal-500 my-4">
        No Project Selected
      </h2>
      <p className="text-teal-400 mb-4">
        Select a project or get started with a new one
      </p>
      <p className="mt-8">
        <Button onClick={onStartAddProject}>Create new project</Button>
      </p>
    </div>
  );
};

export default NoProjects;

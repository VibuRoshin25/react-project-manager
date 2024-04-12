import Input from "./Input";

const NewProject = () => {
  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button className="text-teal-800 hover:text-teal-950 ">Cancel</button>
        </li>
        <li>
          <button className="bg-teal-800 text-teal-50 hover:bg-teal-950 px-6 py-2 rounded-md">
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input label="Title" />
        <Input label="Description" textarea />
        <Input type="date" label="Due Date" />
      </div>
    </div>
  );
};

export default NewProject;

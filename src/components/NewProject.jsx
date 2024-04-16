import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const dueDate = useRef();
  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = dueDate.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDueDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }
    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
    });
  };
  return (
    <>
      <Modal ref={modal}>
        <h2 className="text-xl font-bold text-teal-700 my-4">Invalid Input</h2>
        <p className="text-teal-600 mb-4">
          Provide valid inputs for all fields.
        </p>
      </Modal>
      <div className="w-[35rem] mt-16">
        <menu className="flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-teal-800 hover:text-teal-950 "
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="bg-teal-800 text-teal-50 hover:bg-teal-950 px-6 py-2 rounded-md"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </menu>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={dueDate} type="date" label="Due Date" />
        </div>
      </div>
    </>
  );
};

export default NewProject;

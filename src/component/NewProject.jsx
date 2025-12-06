import React, { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";
const NewProject = ({ onAdd, onCancel }) => {
  const modal = useRef();
  const title = useRef();
  const description = useRef();
  const duedate = useRef();
  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDueDate = duedate.current.value;
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
      duedate: enteredDueDate,
    });
  };
  return (
    <div>
      <Modal ref={modal} buttonCaption="okay">
        <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
        <p className="text-stone-600 mb-4">
          Oops....looks like you forgot to enter a value
        </p>
        <p className="text-stone-600 mb-4">
          Please make sure you provide a valid input
        </p>
      </Modal>
      <div className="w-140 mt-16">
        <div className=" flex items-center justify-end gap-4 my-4">
          <li>
            <button
              className="text-stone-800 hover:text-stone-950"
              onClick={onCancel}
            >
              Cancel
            </button>
          </li>
          <li>
            <button
              className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
              onClick={handleSave}
            >
              Save
            </button>
          </li>
        </div>
        <div>
          <Input ref={title} label="Title" />
          <Input ref={description} label="Description" textarea />
          <Input ref={duedate} label="Due Date" type="Date" />
        </div>
      </div>
    </div>
  );
};

export default NewProject;

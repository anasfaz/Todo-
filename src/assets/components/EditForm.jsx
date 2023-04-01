import { useState, useEffect } from "react";
//library imports
import { CheckIcon } from "@heroicons/react/24/solid";

const EditForm = ({ editedTask, updatedTask,closeEditeMode }) => {
  const [updatedTaskName, setUpdatedTaskName] = useState(editedTask.name);
  console.log(closeEditeMode);
  useEffect(() => {
    const closeModelIfEscaped = (e) => {
      e.key === "Escape" && closeEditeMode()
    };
    window.addEventListener("keydown", closeModelIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModelIfEscaped);
    };
  }, [closeEditeMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updatedTask({ ...editedTask, name: updatedTaskName });
  };
  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditeMode()
      }}
    >
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTaskName}
            onInput={(e) => setUpdatedTaskName(e.target.value)}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
          <label htmlFor="editTask" className="label">
            Update Task
          </label>
        </div>
        <button
          className="btn"
          aria-label={`Confirm edited task to now read ${updatedTaskName}`}
          type="submit"
        >
          <CheckIcon strokeWidth={2} height={24} width={24} />
        </button>
      </form>
    </div>
  );
};
export default EditForm;

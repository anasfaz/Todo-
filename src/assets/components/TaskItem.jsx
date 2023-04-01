import { useState } from "react";

// import checkedLocalStorage from "../../hooks/checkedLocalStorage";

import JSConfetti from "js-confetti";

const jsConfetti = new JSConfetti();

import style from "./TaskItem.module.css";

//icon
import { CheckIcon } from "@heroicons/react/24/outline";


import { TrashIcon } from "@heroicons/react/24/outline";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
const TaskItem = ({ task ,deleteTask, toggleTask, enterEditMode}) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handleCheckboxChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
    if(!isChecked){
     jsConfetti.addConfetti({
      emojis: [ "🎯","✨","🎉"],
    });
    }
  };
  console.log(isChecked,'complete');
  return (
    <li className={style.task}>
      <div className={style["task-group"]}>
        <input
          type="checkbox"
          className={style.checkbox}
          checked={isChecked}
          onChange={handleCheckboxChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className={style.label}>
          {task.name}
          <p className={style.checkmark}>
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className={style["task-group"]}>
        <button
          className="btn"
          aria-label={`Update${task.name} Task`}
            onClick={()=>enterEditMode(task)}
        >
          <PencilSquareIcon strokeWidth={2} width={24} height={24}/>
        </button>
        <button
          className={`btn ${style.delete}`}
          aria-label={`Delete ${task.name} Task`}
            onClick={()=>deleteTask(task.id)}
        >
          <TrashIcon strokeWidth={2} width={24} height={24}/>
        </button>
      </div>
    </li>
  );
};

export default TaskItem;

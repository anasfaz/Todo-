import TaskItem from "./TaskItem";
//style
import styles from "./TaskList.module.css";

const TaskList = ({tasks,deleteTask, toggleTask,enterEditMode}) => {

  return (
     
    <ul className={styles.tasks}>
      {tasks.sort((a,b)=> b.id - a.id).map(task => (
        <TaskItem key={task.id} task={task} deleteTask={deleteTask} enterEditMode={enterEditMode} toggleTask={toggleTask} />
        ))}
    </ul>
  );
};
export default TaskList;

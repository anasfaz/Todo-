import { useState } from "react";

import useLocalStorage from './hooks/useLocalStorage'

//custom components
import CustomForm from "./assets/components/CustomForm";
import EditForm from "./assets/components/EditForm";
import TaskList from "./assets/components/TaskList";

function App() {

  const [tasks, setTasks] = useLocalStorage('react-todo.task',[])
  const [PreviousFocusEl,setPreviousFocusEl]=useState(null)
  const [editedTask,setEditedTask]=useState(null)
  const [isEditing,setIsEditing]=useState(false)


  const addTask = (task) => {
    console.log(task);
    setTasks((prevState) => [...prevState, task]);
  };


  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((t) => t.id !== id));
  };

  const updatedTask =(task)=>{
    setTasks(prevState=> prevState.map(t=>(t.id==task.id
      ?{...t,name:task.name}:t)))
      closeEditMode();
  }


  const toggleTask=(id)=>{
    setTasks(prevState => prevState.map(t=>(t.id===id
      ?{...t,checked:!t.checked}:t
      )))
  }

  const closeEditMode= () =>{
    setIsEditing(false)
    console.log(PreviousFocusEl,'-------------');
    PreviousFocusEl.focus();
  }


  const enterEditMode= (task) => {  
    setEditedTask(task)
    setIsEditing(true)
    setPreviousFocusEl(document.activeElement)
  }
  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {
        isEditing&&(
          <EditForm editedTask={editedTask}
           updatedTask={updatedTask} />
          )
        
      }
      
      <CustomForm addTask={addTask} />
      {tasks && <TaskList tasks={tasks} deleteTask={deleteTask} 
      enterEditMode={enterEditMode} 
      closeEditMode={closeEditMode}
      toggleTask={toggleTask}
      />}
    </div>
  );
}

export default App;

import './ToDoApp.css';
import TaskButton from './components/TaskButton/TaskButton';
import TaskInput from './components/TaskInput/TaskInput';
function ToDoApp() {
  

  return (
    <>
      <h1>To-Do List</h1>
      <div>
        <TaskInput />
        <TaskButton  text="Add Task"/>
      </div>
      <ul>
        <li>Task ...</li>
        <li>Task ...</li>
        <li>Task ...</li>
      </ul>
      
    </>
  )
}

export default ToDoApp

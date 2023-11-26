import { useState,useEffect } from 'react'
import './App.css'
import ToDo from './components/ToDo/ToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(1);
 
  useEffect(() => {
    async function getTodos() {
      try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/todos/${count.toString()}`);
        let todosList =  await response.json()
        setTodos(prevState => [...prevState, todosList])
        console.log(todos)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    }
    
    const handleClick = () => {
      setCount(prevState => prevState + 1);
      getTodos();  
    }

    window.addEventListener('click',handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  },[count])

  return (
    <>
      <div className="card">
        <h1>Click on the screen</h1>
        <div>
          {
          todos.length>0 && todos.map(todo => <ToDo key={todo.id} todo={todo} />)
          }
        </div>
      </div>
      
    </>
  )
}

export default App

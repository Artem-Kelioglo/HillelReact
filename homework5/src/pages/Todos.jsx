import  { useEffect, useState } from 'react'
import ToDo from '../components/ToDo/ToDo';


const Todos = () => {
  const [todos, setTodos] = useState([])
  
  useEffect(() => {
    const getTodos = async () => {
      try{
        const response = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
        const todosList =  await response.json()
        setTodos(todosList)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getTodos()
  },[])
 
  return (
    <div>Todos
      {todos.map(todo => <ToDo key={todo.id} todo={todo} />)}
    </div>
  )
}

export default Todos
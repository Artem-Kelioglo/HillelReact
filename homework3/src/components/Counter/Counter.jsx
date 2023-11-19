import { useState } from 'react';
import './Counter.css';

const Counter = () => {
  const [count, setCount] = useState(0)
  
  const onDecrement = () => {
    setCount(prevState=> prevState-1)
  }
  
  const onIncrement= () => {
    setCount(prevState=> prevState+1)
  }

  return (
    <div>
      <h1>Counter : {count}</h1>
      <button onClick={onDecrement}>Decrement</button>
      <button onClick={onIncrement}>Increment</button>
    </div>
  )
}

export default Counter

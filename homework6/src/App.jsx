import { useContext} from 'react'
import './App.css'
import { CounterContext } from './context/counterContext'

function App() {
  
  const {state,onIncrement,onDecrement} = useContext(CounterContext)

  return (
    <>
      <h1> React counter</h1>
      <div className="card">
        <p>
          {state.count}
        </p>
        <button onClick={onIncrement}>
        INCREMENT
        </button>
        <button onClick={onDecrement}>
        DECREMENT
        </button>
      </div>

    </>
  )
}

export default App

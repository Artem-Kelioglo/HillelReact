import { useContext} from 'react'
import './App.css'
import { CounterContext } from './context/CounterContext'


function App() {
  
  const {state,onIncrement,onDecrement,onReset} = useContext(CounterContext)

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
        <button onClick={onReset}>
        RESET
        </button>
      </div>

    </>
  )
}

export default App

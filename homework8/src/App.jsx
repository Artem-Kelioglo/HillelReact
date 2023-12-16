
import { useSelector, useDispatch } from 'react-redux'
import './App.css'
import { decrement, increment } from './counter/counter'

function App() {

  const dispatch=useDispatch()
  const count = useSelector((state) => state.count.value)
  
  return (
    <>
      <h1>Counter</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
         +
        </button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>
          -
        </button>
      </div>
    </>
  )
}

export default App

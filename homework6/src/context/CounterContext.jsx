import { createContext, useReducer } from "react";
import { Decrement, Increment, Reset } from "../action";
import { DECREMENT, INCREMENT, RESET } from "../actionTypes";

export const CounterContext = createContext(null);

export const CounterProvider = ({ children }) => {
  const initialState = {
    count:0
  }
 
  const reducer = (store,action) => {
    switch (action.type) {
      case INCREMENT: return {
        count:store.count+1
      } 
      case DECREMENT: return {
        count:store.count-1
      } 
      case RESET: return {
        count:0
      } 
      default:
        return; 
    }
  }
  
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch(Increment())
  }
  const handleDecrement = () => {
    dispatch(Decrement())
  }
  const handleReset = () => {
    dispatch(Reset())
  }
  
  const provideValue = {
    onIncrement: handleIncrement,
    onDecrement: handleDecrement,
    onReset: handleReset,
    state
  }
  
  return (
    <CounterContext.Provider value={provideValue}>
    {children }
    </CounterContext.Provider> 
  )
}
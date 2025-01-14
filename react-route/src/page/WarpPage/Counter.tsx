import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, dynamicsPlus } from "../../store/counter.ts"
import type { RootState, AppDispatch } from "../../store/index.ts"

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch<AppDispatch>()
  
  return (<>
    <div>counter: {counter}</div>
    <button onClick={() => dispatch(increment())}>plus +</button>
    <button onClick={() => dispatch(decrement())}>minus -</button>
    <button onClick={() => dispatch(dynamicsPlus(10))}>plus 10</button>
  </>)
}

export default Counter
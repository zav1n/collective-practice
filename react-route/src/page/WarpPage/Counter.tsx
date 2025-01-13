import React from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement } from "../../store/counter.ts"
import type { RootState } from "../../store/index.ts"

const Counter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.count)
  const dispatch = useDispatch()

  return (<>
    <div>counter: {counter}</div>
    <button onClick={() => dispatch(increment())}>plus +</button>
    <button onClick={() => dispatch(decrement())}>minus -</button>
  </>)
}

export default Counter
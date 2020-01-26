import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


const ReduxCounter = () => {

  /** useState */
  const [count, setCount] = useState(0);


  /** REDUX  */
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  console.log('num redux', counter);


  return (
    <div className="apps">
      <h1>Test Work:</h1>
      <div>
        <h2>Counter - useState :  {count}</h2>
        <button className="btn" onClick={() => { setCount(count + 1) }}>Add   1</button>
        <button className="btn" onClick={() => { setCount(count - 1) }}>Minus  1</button>
      </div>
      <div className="divider"></div>


      <div>
        <h2>Counter - Redux:  {counter}</h2>
        <button className="btn"
          onClick={() =>
            dispatch({ type: "INCREMENT" })
          }
        >Increment</button>
        <button className="btn"
          onClick={() =>
            dispatch({ type: "DECREMENT" })
          }
        >Increment</button>
      </div>


    </div>
  )
}

export default ReduxCounter

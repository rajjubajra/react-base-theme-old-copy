import React, { useState } from 'react'

const ReduxAppTodo = () => {

  const initalState = [
    {
      text: 'learn Hooks',
      isCompleted: false
    },
    {
      text: 'learn js',
      isCompleted: false,
    },
    {
      text: 'learn Redux',
      isCompleted: false
    }
  ];

  const resultArr = useState(initalState);
  //const todos = resultArr[0];
  //const setTodos = resultArr[1];

  const [todos, setTodos] = useState(initalState);

  return (
    <div className="apps">
      <h1>App To do [Redux]</h1>
    </div>
  )
}

export default ReduxAppTodo

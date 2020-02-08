import React from 'react'


const TodoItem = ({ todos }) => {
  console.log("new array", todos);
  return (
    todos.map((item, index) => {
      return <div key={index} className="todo">
        {item.text}
      </div>
    })
  )
}
export default TodoItem
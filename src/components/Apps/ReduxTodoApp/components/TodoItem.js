import React from 'react'


const TodoItem = (props) => {
  console.log("new array", props.todos);
  return (
    props.todos.map((item, index) => {
      return <div key={index} className="todo">
        {item.text}
      </div>
    })
  )
}
export default TodoItem
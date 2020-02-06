import React, { useState } from 'react'
import TodoForm from './TodoForm'

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet react user" },
    { text: "Build React app" }
  ])

  const Todo = ({ todo }) =>
    <div className="todo">{todo.text}</div>

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
        />
      ))}
      <TodoForm />
    </div>
  )
}

export default TodoApp

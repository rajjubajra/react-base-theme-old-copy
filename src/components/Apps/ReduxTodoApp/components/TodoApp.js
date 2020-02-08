import React from 'react'
import { useSelector } from 'react-redux';
import TodoForm from './TodoForm'
import TodoItem from './TodoItem';

const TodoApp = () => {

  const todos = useSelector(state => state.todoReducer.todos);
  console.log(todos);


  return (
    <div className="todo-list">
      <TodoItem todos={todos} />
      <TodoForm />
    </div>
  )
}

export default TodoApp

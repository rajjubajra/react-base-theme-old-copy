import React from 'react'
import TodoForm from './TodoForm'
import TodoItem from './TodoItem';
import { useSelector } from 'react-redux';

const TodoApp = () => {

  const data = useSelector(state => state);
  console.log('DATA', data);

  return (
    <div className="todo-list">
      <TodoItem />
      <TodoForm />
    </div>
  )
}

export default TodoApp

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodoAction } from '../actions/todoAction';

const TodoForm = () => {
  const [todo, setTodo] = useState('');

  const dispatch = useDispatch();


  function onSubmit(event) {
    event.preventDefault();
    if (todo.trim() === "") return; //empty value do nothing

    dispatch(addTodoAction({
      text: todo
    }));

    setTodo(""); //set input-field  blank
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          className="input"
          value={todo}
          onChange={e => setTodo(e.target.value)}
          placeholder="Add new item"
        />
        <button type="submit" >Submit</button>
      </form>
    </>
  )
}
export default TodoForm;

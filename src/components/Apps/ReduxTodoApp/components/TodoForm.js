import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { actionAddTodo } from '../actions/todoAction';


const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const [alert, setAlert] = useState('');

  const dispatch = useDispatch();


  function onSubmit(event) {
    event.preventDefault();
    if (todo.trim() === "") {
      setAlert("Input field is empty");
      return;
    }  //empty value do nothing
    dispatch(actionAddTodo(todo))
    setTodo(""); //set input-field  blank
  }



  useEffect(() => {
    //display alert message for 3second only
    setTimeout(() => {
      setAlert("");
    }, 3000)
  }, [alert])



  return (
    <>
      <p>{alert}</p>
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

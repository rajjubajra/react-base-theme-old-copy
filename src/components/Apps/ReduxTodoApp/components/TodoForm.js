import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionAddTodo, actionUpdateTodos } from '../actions/todoAction';



const TodoForm = () => {
  const [todo, setTodo] = useState('');
  const [alert, setAlert] = useState('');

  const dispatch = useDispatch();


  //GET SELECTED ITEM FROM THE ARRAY in order to populate input field
  const populateInput = useSelector(state => state.todoReducer.input);
  const selectedId = useSelector(state => state.todoReducer.selectedId);
  console.log("FORM: populate input", populateInput, "selected index", selectedId);

  //onSubmit add new todo
  function onSubmit(event) {
    event.preventDefault();
    if (todo.trim() === "") {
      setAlert("Input field is empty");
      return;
    }  //empty value do nothing
    //check Update / New add
    //add New item if there no Edit item into the input field
    if (populateInput === '') {
      dispatch(actionAddTodo(todo))
    } else {
      //run Update or Edit
      dispatch(actionUpdateTodos(selectedId, todo))
    }
    setTodo(""); //set input-field  blank
  }

  //populate input field for Edit array element
  useEffect(() => {
    if (populateInput !== '') {
      setTodo(populateInput);
    }
  }, [populateInput])

  //DISPLAY ALERT MESSAGE FOR 3 SECOND
  useEffect(() => {
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

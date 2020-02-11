import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionPopulateInput, actionJobDone, actionJobDoneUndo, actionDelete, actionClearIndexObjects, actionDeleteConfirmation } from '../actions/todoAction';


const TodoItem = () => {

  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();
  const getTodos = useSelector(state => state.todoReducer.todos);
  const populateIndex = useSelector(state => state.todoReducer.st_populateIndex);
  const jobDonIndex = useSelector(state => state.todoReducer.st_jobDonIndex);
  const jobDonUndoIndex = useSelector(state => state.todoReducer.st_jobDonUndoIndex);
  const deleteIndex = useSelector(state => state.todoReducer.st_deleteIndex);
  const msgDeleteConfirmation = useSelector(state => state.todoReducer.st_msgDeleteConfirmation);
  const msgDeleteConfirmationId = useSelector(state => state.todoReducer.st_msgDeleteConfirmationId);


  useEffect(() => {

    if (msgDeleteConfirmation !== '') {
      setTodos(getTodos);
    }

    if (deleteIndex !== '') {
      setTodos(getTodos);
      actionClearIndexObjects();
    }

    if (jobDonIndex !== '') {
      setTodos(getTodos);
      actionClearIndexObjects();
    }

    if (jobDonUndoIndex !== '') {
      setTodos(getTodos);
      actionClearIndexObjects();
    }

    if (getTodos.length > 0) {
      setTodos(getTodos);
    }

  }, [getTodos, dispatch, jobDonIndex, deleteIndex, jobDonUndoIndex, msgDeleteConfirmation])


  function ButtonJobDone(complete, id) {
    return complete === false
      ? <i onClick={() => dispatch(actionJobDone(id))}>Done</i>
      : <i onClick={() => dispatch(actionJobDoneUndo(id))}>Undo</i>
  }

  function ButtonDelConfirme(id) {
    if (msgDeleteConfirmation !== '' && id === msgDeleteConfirmationId) {
      return <span>
        <i onClick={() => dispatch(actionDelete(id))}>Sure</i>
        <i onClick={() => dispatch(actionClearIndexObjects(id))}>No</i>
      </span>
    } else {
      return <i onClick={() => dispatch(actionDeleteConfirmation(id))}>Del</i>
    }
  }

  console.log("TODO-ITEM.JS: Selected Index", populateIndex, "todos - ", getTodos);

  return (
    todos.map((item, index) => {
      return <div key={index}
        className={`todo ${index === populateIndex ? 'hide' : ''}`}>
        {
          msgDeleteConfirmationId === item.id ? <div>{msgDeleteConfirmation}</div> : ''
        }
        {item.id <= 9 ? 0 + String(item.id) : item.id} - <span className={`${item.complete === true ? 'cross-text' : ''}`}>
          {item.text}
        </span>
        <span className="edit-delete">
          [ <i onClick={() => dispatch(actionPopulateInput(item.id))}>Edit</i>
          |
            {ButtonJobDone(item.complete, item.id)}
          |
            {ButtonDelConfirme(item.id)}
          ]
        </span>
      </div>
    })
  )
}
export default TodoItem
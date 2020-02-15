import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionPopulateInput, actionJobDone, actionJobDoneUndo, actionDelete, actionClearIndexObjects, actionDeleteConfirmation } from '../actions/todoAction';

const TodoItem = () => {


  //STATs from REDUX STORAGE
  //todo data in array
  const getTodos = useSelector(state => state.todoReducer.todos);

  //LOCAL STATES
  const [todos, setTodos] = useState([]);
  //console.log('Todoitem.js:  TODOS', todos);


  //REDUX DISPATCH
  const dispatch = useDispatch();




  //index in order to display hide while Edit,
  const populateIndex = useSelector(state => state.todoReducer.st_populateIndex);
  //in order to reload todos after onClick jobdone buddon
  const jobDonIndex = useSelector(state => state.todoReducer.st_jobDonIndex);
  //in order to reload todos after onClick jobdone undo button
  const jobDonUndoIndex = useSelector(state => state.todoReducer.st_jobDonUndoIndex);
  //in order to reload todos after delete button clicked
  const deleteIndex = useSelector(state => state.todoReducer.st_deleteIndex);
  //in order to reload todos after msg delete confirmed
  const msgDeleteConfirmation = useSelector(state => state.todoReducer.st_msgDeleteConfirmation);
  //in order to execute Botton type in Function ButtonDelConfirm
  const msgDeleteConfirmationId = useSelector(state => state.todoReducer.st_msgDeleteConfirmationId);





  useEffect(() => {

    if (msgDeleteConfirmation !== '') {
      //setTodos(getTodos);
      //  setTodos(getTodos);
      actionClearIndexObjects();
    }

    if (deleteIndex !== '') {
      //   setTodos(getTodos);
      actionClearIndexObjects();
    }

    if (jobDonIndex !== '') {
      //    setTodos(getTodos);
      actionClearIndexObjects();
    }

    if (jobDonUndoIndex !== '') {
      //    setTodos(getTodos);
      actionClearIndexObjects();
    }

    if (populateIndex !== '') {
      //    setTodos(getTodos);
      actionClearIndexObjects();
    }

    if (getTodos.length > 0) {
      setTodos(getTodos);
    }


  }, [dispatch, jobDonIndex, deleteIndex, jobDonUndoIndex, msgDeleteConfirmation, populateIndex, getTodos])


  function ButtonJobDone(complete, id) {
    return complete === false
      ? <i onClick={() => dispatch(actionJobDone(id))}>Done</i>
      : <i onClick={() => dispatch(actionJobDoneUndo(id))}>Undo</i>
  }

  function ButtonDelConfirme(id) {
    if (msgDeleteConfirmation !== '' && id === msgDeleteConfirmationId) {
      return <span style={{ fontWeight: 'bold' }}>
        <i onClick={() => dispatch(actionDelete(id))}>Sure</i>
        <i onClick={() => dispatch(actionClearIndexObjects(id))}>No</i>
      </span>
    } else {
      return <i onClick={() => dispatch(actionDeleteConfirmation(id))}>Del</i>
    }
  }

  return (
    todos.map((item, index) => {
      return <div key={index}
        className={`todo ${index === populateIndex ? 'hide' : ''}`}>
        {
          msgDeleteConfirmationId === item.id ? <div>{msgDeleteConfirmation}</div> : ''
        }
        {index + 1 <= 9 ? 0 + String(index + 1) : index + 1} - <span className={`${item.complete === true ? 'cross-text' : ''}`}>
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
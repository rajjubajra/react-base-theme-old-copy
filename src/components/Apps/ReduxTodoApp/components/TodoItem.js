import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { actionPopulateInput, actionJobDone, actionJobDoneUndo, actionDelete, actionClearIndexObjects } from '../actions/todoAction';


const TodoItem = () => {

  const [todos, setTodos] = useState([]);

  const dispatch = useDispatch();
  const getTodos = useSelector(state => state.todoReducer.todos);
  const populateIndex = useSelector(state => state.todoReducer.st_populateIndex);
  const jobDonIndex = useSelector(state => state.todoReducer.st_jobDonIndex);
  const jobDonUndoIndex = useSelector(state => state.todoReducer.st_jobDonUndoIndex);
  const deleteIndex = useSelector(state => state.todoReducer.st_deleteIndex);


  useEffect(() => {

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

  }, [getTodos, dispatch, jobDonIndex, deleteIndex, jobDonUndoIndex])


  function ButtonJobDone(complete, id) {
    return complete === false
      ? <i onClick={() => dispatch(actionJobDone(id))}>Done</i>
      : <i onClick={() => dispatch(actionJobDoneUndo(id))}>Undo</i>

  }

  console.log("TODO-ITEM.JS: Selected Index", populateIndex, "todos - ", getTodos);

  return (
    todos.map((item, index) => {
      return <div key={index}
        className={`todo ${index === populateIndex ? 'hide' : ''}`}>
        {item.id <= 9 ? 0 + String(item.id) : item.id} - <span className={`${item.complete === true ? 'cross-text' : ''}`}>
          {item.text}
        </span>
        <span className="edit-delete">
          [ <i onClick={() => dispatch(actionPopulateInput(item.id))}>Edit</i>
          |
            {ButtonJobDone(item.complete, item.id)}
          |
            <i onClick={() => dispatch(actionDelete(item.id))}>Del</i>
          ]
        </span>
      </div>
    })
  )
}
export default TodoItem
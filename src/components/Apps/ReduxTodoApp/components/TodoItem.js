import React from 'react';
import { useSelector, useDispatch } from "react-redux";


const TodoItem = () => {

  const dispatch = useDispatch();
  const todos = useSelector(state => state.todoReducer.todos);
  const selcId = useSelector(state => state.todoReducer.selectedId);
  console.log("item lsit, selectedid", selcId);

  const runActionPopulateField = (id) => (
    dispatch(
      {
        id: id,
        type: "POPULATE_INPUT"
      }
    )
  );

  return (
    todos.map((item, index) => {
      return <div key={index} className={`todo ${index === selcId ? 'hide' : ''}`}>
        {item.id <= 9 ? 0 + String(item.id) : item.id} - {item.text}
        <span className="edit-delete">
          [<i onClick={() => runActionPopulateField(item.id)}>Edit</i>
          |
          <i>Del</i>]
        </span>
      </div>
    })
  )
}
export default TodoItem
import { ADD_TODO, POPULATE_INPUT, UPDATE_TODO, JOB_DONE, DELETE, CLEAR_INPUT_FIELD, JOB_DONE_UNDO } from "./actionType";


let nextId = 1;
export const actionAddTodo = text => (
  {
    id: nextId++,
    type: ADD_TODO,
    payload: text
  }
)

export const actionPopulateInput = (id) => (
  {
    id: id,
    type: POPULATE_INPUT,
  }
)

export const actionUpdateTodos = (id, text) => (
  {
    id: id,
    type: UPDATE_TODO,
    payload: text
  }
)

export const actionJobDone = (id) => (
  {
    id: id,
    type: JOB_DONE
  }
)

export const actionJobDoneUndo = (id) => (
  {
    id: id,
    type: JOB_DONE_UNDO
  }
)

export const actionDelete = (id) => ({
  id: id,
  type: DELETE
})

export const actionClearIndexObjects = () => ({
  type: CLEAR_INPUT_FIELD
})


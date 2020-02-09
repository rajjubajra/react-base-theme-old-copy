let nextId = 1;
export const actionAddTodo = text => (
  {
    id: nextId++,
    type: "ADD_TODO",
    payload: text
  }
)

export const actionPopulateInput = (id) => (
  {
    id: id,
    type: "POPULATE_INPUT",
  }
)

export const actionUpdateTodos = (id, text) => (
  {
    id: id,
    type: "UPDATE_TODO",
    payload: text
  }
)
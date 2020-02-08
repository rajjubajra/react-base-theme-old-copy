let nextTodId = 0;
export const addTodoAction = text => (
  {
    type: 'ADD_TODO',
    id: nextTodId,
    payload: text
  }
)


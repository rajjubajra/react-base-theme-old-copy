
const initialTodos = {
  todos: []
}

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      state = {
        ...state,
        todos: [...state.todos, { text: action.payload }]
      }
      break;
    default:
      return state;
  }
  return state;
}
export default todoReducer;
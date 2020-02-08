
const initialTodos = {
  todos: []
}

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        { id: action.id, text: action.text }
      ]
    default:
      return state;
  }
  // return state;


}
export default todoReducer;
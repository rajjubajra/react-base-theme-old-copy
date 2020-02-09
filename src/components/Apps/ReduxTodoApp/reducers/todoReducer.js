const initialTodos = {
  todos: [],
  input: '',
  selectedId: ''
}

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      console.log("ADD TODO ", action.payload, "id ", action.id);
      state = {
        ...state,
        todos: [...state.todos, { text: action.payload, id: action.id }]
      }
      break;
    case 'POPULATE_INPUT':
      const foundId = state.todos.findIndex(e => e.id === action.id);
      state = {
        ...state,
        input: state.todos[foundId].text,
        selectedId: foundId
      }
      break;
    case 'UPDATE_TODO':
      state = {
        ...state,
        state: state.todos[state.selectedId] = { id: action.id, text: action.payload },
        selectedId: ''
      }
      break;
    default:
      return state;
  }
  console.log("STATE FROM REDUCER", state);
  return state;

}
export default todoReducer;
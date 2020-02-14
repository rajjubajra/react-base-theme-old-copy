import { ADD_TODO, POPULATE_INPUT, UPDATE_TODO, JOB_DONE, DELETE, CLEAR_INPUT_FIELD, JOB_DONE_UNDO, DELETE_CONFIRMATION } from "../actions/actionType";

const initialTodos = {
  todos: [],
  input: '',
  st_populateIndex: '',
  st_populateId: '',
  st_jobDonIndex: '',
  st_jobDonUndoIndex: '',
  st_deleteIndex: '',
  st_msgDeleteConfirmation: '',
  st_msgDeleteConfirmationId: '',
}

const todoReducer = (state = initialTodos, action) => {
  switch (action.type) {
    case ADD_TODO:
      console.log("ADD TODO ", action.payload, "id ", action.id);
      state = {
        ...state,
        todos: [...state.todos, { id: action.id, text: action.payload, complete: false }]
      }
      console.log("ADD TODO 2", state.todos)
      break;

    case POPULATE_INPUT:
      console.log("populate todo", state.st_populateIndex);
      const populateIndex = state.todos.findIndex(e => e.id === action.id);
      state = {
        ...state,
        input: state.todos[populateIndex].text,
        st_populateIndex: populateIndex,
        st_populateId: action.id
      }
      console.log("POPULATE TODO 2", state.todos)
      break;

    case UPDATE_TODO:
      console.log("update todo", state.st_populateIndex);
      state = {
        ...state,
        state: state.todos[state.st_populateIndex] = {
          id: action.id,
          text: action.payload,
          complete: state.todos[state.st_populateIndex].complete
        },
        st_populateIndex: '',
        st_populateId: '',
        input: ''
      }
      console.log("UPDATE TODO 2", state.todos)
      break;

    case JOB_DONE:
      const jobDonIndex = state.todos.findIndex(e => e.id === action.id);
      state = {
        ...state,
        state: state.todos[jobDonIndex].complete = true,
        st_jobDonIndex: jobDonIndex,
        st_jobDonUndoIndex: ''
      }
      console.log("JOB DONE 2", state.todos, jobDonIndex)
      break;
    case JOB_DONE_UNDO:
      const jobDonUndoIndex = state.todos.findIndex(e => e.id === action.id);
      state = {
        ...state,
        state: state.todos[jobDonUndoIndex].complete = false,
        st_jobDonUndoIndex: jobDonUndoIndex,
        st_jobDonIndex: ''
      }
      console.log("JOB DONE UNDO 2", state.todos, jobDonUndoIndex)
      break;

    case DELETE:
      const deleteIndex = state.todos.findIndex(e => e.id === action.id);
      console.log('DELETE', deleteIndex, action.id);
      state = {
        ...state,
        state: state.todos.splice(deleteIndex, 1),
        st_deleteIndex: deleteIndex
      }
      console.log("DELETE 2", state.todos)
      break;

    case DELETE_CONFIRMATION:
      const msgDeleteConfirmation = "Are you sure, you would like to delete";
      state = {
        ...state,
        st_msgDeleteConfirmation: msgDeleteConfirmation,
        st_msgDeleteConfirmationId: action.id,
      }
      break;
    case CLEAR_INPUT_FIELD:
      console.log('CLEAR INPUT FIELD');
      //if selected input field is blank clear all stored objects
      state = {
        ...state,
        input: '',
        st_populateIndex: '',
        st_populateId: '',
        st_populateComplete: '',
        st_jobDonIndex: '',
        st_deleteIndex: '',
        st_msgDeleteConfirmation: '',
        st_msgDeleteConfirmationId: '',
      }
      break;


    default:
      //console.log("DEFAULT", state.todos)
      return state;

  }
  console.log("STATE FROM REDUCER", state, state.st_populateIndex, state.st_jobDonIndex);
  return state;

}
export default todoReducer;
import { actionTypes } from "../action/actionTypes"

const initalState = {
  result: [],
  text: '',
  status: false,
  error: null
}


export const reducerSearch = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      state = {
        ...state,
        status: true,
      }
      return state;
    case actionTypes.SEARCH_FETCHED:
      state = {
        ...state,
        result: action.payload,
        text: action.text,
        status: true
      }
      return state;
    case actionTypes.SEARCH_ERROR:
      state = {
        ...state,
        error: action.payload,
        text: action.text,
        status: false
      }
      return state;
    default:
      return state;
  }
}
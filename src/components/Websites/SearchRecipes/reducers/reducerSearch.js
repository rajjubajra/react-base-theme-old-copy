import { actionTypes } from "../action/actionTypes"

const initalState = {
  result: [],
  hits: '',
  text: '',
  from: 0,
  to: 0,
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
      console.log("reducerSearch FETCHED", action.payload);
      state = {
        ...state,
        result: action.payload,
        hits: action.hits,
        text: action.text,
        from: action.from,
        to: action.to,
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
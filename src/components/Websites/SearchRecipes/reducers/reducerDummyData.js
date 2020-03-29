import { actionTypes } from "../action/actionTypes"

const initalState = {
  result: [],
  hits: '',
  text: '',
  from: 0,
  to: 0,
  health: '',
  status: false,
  error: null
}


export const reducerDummyData = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.DUMMY_DATA_START:
      state = {
        ...state,
        status: true,
      }
      return state;
    case actionTypes.DUMMY_DATA_FETCHED:
      state = {
        ...state,
        result: action.payload,
        hits: action.hits,
        text: "N/A",
        from: 0,
        to: 5,
        health: "N/A",
        status: true
      }
      return state;
    case actionTypes.DUMMY_DATA_ERROR:
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



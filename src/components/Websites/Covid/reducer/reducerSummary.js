import { actionTypes } from "../action/actionTypes"

const initalState = {
  summary: [],
  countries: [],
  data: [],
  status: ''
}

export const reducerSummary = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.API_FETCHING:
      state = {
        ...state,
        status: 'Loading'
      }
      return state;
    case actionTypes.API_FETCHED:
      state = {
        ...state,
        summary: action.summary,
        countries: action.payload,
        status: 'loaded'
      }
      return state;
    case actionTypes.API_ERROR:
      state = {
        ...state,
        summary: action.summary,
        countries: action.payload,
        status: 'error fetching summary'
      }
      return state;

    default:
      return state;
  }
}
import { actionTypes } from "../action/actionTypes"
import { actionDayOneTotal } from "../action/actionDayOneTotal";

const initalState = {
  summary: [],
  countries: [],
  data: [],
  status: ''
}

export const reducerDayOneTotal = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.API_DAYONETOTAL_FETCHING:
      state = {
        ...state,
        status: 'Loading'
      }
      return state;
    case actionTypes.API_DAYONETOTAL_FETCHED:
      state = {
        ...state,
        summary: action.summary,
        countries: action.payload,
        status: 'loaded'
      }
      return state;
    case actionTypes.API_DAYONETOTAL_ERROR:
      state = {
        ...state,
        summary: action.summary,
        countries: action.payload,
        status: 'error fetching day one total'
      }
      return state;
    default:
      return state;
  }
}
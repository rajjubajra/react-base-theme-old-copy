import { actionTypes } from "../action/actionTypes"


const initalState = {
  summary: [],
  countries: [],
  recharts_data: [],
  data: [],
  status: ''
}


export const reducerCountryStatus = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.COUNTRY_STATUS_FETCHING:
      state = {
        ...state,
        status: 'Loading'
      }
      return state;
    case actionTypes.COUNTRY_STATUS_FETCHED:
      state = {
        ...state,
        summary: action.summary,
        countries: action.payload,
        recharts_data: action.recharts_data,
        data: [],
        status: 'loaded'
      }
      return state;
    case actionTypes.COUNTRY_STATUS_ERROR:
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
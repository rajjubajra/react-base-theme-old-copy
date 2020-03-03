import { actionTypes } from "../actions/actionTypes"

const initialData = {
  fetching: false,
  fetched: false,
  error: null,
  data: []
}

export const reducerFetchData = (state = initialData, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LAN_PASAA_DATA_START:
      {
        return {
          ...state,
          fetching: true,
          fetched: false
        }
      }
    case actionTypes.FETCH_LAN_PASAA_DATA_RECEIVED: {
      console.log("REDUCER: DATA RECEIVED");
      return {
        ...state,
        data: action.payload,
        fetched: true,
        fetching: false,
        error: null
      }
    }
    case actionTypes.FETCH_LAN_PASAA_DATA_ERROR:
      return {
        ...state,
        data: action.payload,
        fetched: false,
        fetching: false,
        error: action.payload
      }
    default:
      return state;
  }
}
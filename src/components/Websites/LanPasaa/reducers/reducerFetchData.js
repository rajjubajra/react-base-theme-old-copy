import { actionTypes } from "../actions/actionTypes"

const initialData = {
  fetching: false,
  fetched: false,
  error: null,
  categories: []
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
      return {
        ...state,
        categories: action.payload,
        fetched: true,
        fetching: false,
        error: null
      }
    }


    default:
      return state;

  }
}
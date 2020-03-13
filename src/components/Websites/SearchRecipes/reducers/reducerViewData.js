import { actionTypes } from "../action/actionTypes"

const initialState = {
  data: [],
  status: false,
  error: null,
}

export const reducerViewData = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DATA_FETCHING:
      state = {
        ...state,
        status: true
      }
      return state;
    case actionTypes.DATA_FETCHED:
      state = {
        ...state,
        data: action.payload,
        status: true,
      }
      return state;
    case actionTypes.DATA_ERROR:
      state = {
        ...state,
        data: action.payload,
        status: false
      }
      return state;
    default:
      return state;
  }
}
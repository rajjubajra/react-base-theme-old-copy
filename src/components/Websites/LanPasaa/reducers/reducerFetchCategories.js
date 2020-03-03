import { actionTypes } from "../actions/actionTypes"

const initialState = {
  categories: [],
  catgFetching: false,
  catgFetched: false,
  error: null
}

export const reducerFetchCategories = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LAN_PASAA_CATEGORIES_START:
      state = {
        ...state,
        catgFetching: true,
        catgFetched: false,
      }
      return state;
    case actionTypes.FETCH_LAN_PASAA_CATEGORIES_RECEIVED:

      state = {
        ...state,
        categories: action.categories,
        catgFetched: true,
        catgFetching: false
      }
      return state;
    case actionTypes.FETCH_LAN_PASAA_CATEGORIES_ERROR:
      state = {
        catgFetched: false,
        catgFetching: false,
        error: action.error
      }
      return state;
    default:
      return state;
  }
}
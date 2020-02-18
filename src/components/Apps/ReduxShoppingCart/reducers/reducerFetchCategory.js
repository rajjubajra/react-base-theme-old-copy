import { actionTypes } from "../actions/actionTypes"

const initalState = {
  fetching: false,
  fetched: false,
  categories: [],
  error: null,
  categoryId: 0
}

export const reducerFetchCategory = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CATEGORY_START: {
      return { ...state, fetching: true, fatched: false }
    }
    case actionTypes.FETCH_PRODUCTS_ERROR: {
      return { ...state, fetching: false, fetched: false, error: action.payload }
    }
    case actionTypes.FETCH_CATEGORY_RECEIVED: {
      return { ...state, fetching: false, fetched: true, categories: action.payload }
    }
    case actionTypes.CATEGORY_INDEX_OF_PRODUCTS: {
      return { ...state, categoryId: action.id }
    }
    default:
      return state;
  }

  //return state;
}
import { actionTypes } from "../actions/actionTypes"

const initialState = {
  products: [],
  prdFetching: false,
  prdFetched: false,
  error: null
}

export const reducerFetchProducts = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_LAN_PASAA_PRODUCTS_START:
      state = {
        prdFetched: false,
        prdFetching: true
      }
      return state;
    case actionTypes.FETCH_LAN_PASAA_PRODUCTS_RECEIVED:
      state = {
        products: action.payload,
        prdFetched: true,
        prdFetching: false
      }
      return state;
    case actionTypes.FETCH_LAN_PASAA_PRODUCTS_ERROR:
      state = {
        products: action.payload,
        prdFetching: false,
        prdFetched: false,
        error: action.error
      }
      return state;
    default:
      return state;
  }
}
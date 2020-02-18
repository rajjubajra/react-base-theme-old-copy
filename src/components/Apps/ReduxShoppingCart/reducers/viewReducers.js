import { actionTypes } from "../actions/actionTypes";

const initialState = {
  categoryIndex: 0
}

export const viewReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PRODUCT_LISTING:
      console.log("Product Listing....")
      return { ...state, categoryIndex: action.index }
    default:
      console.log("Product Listing Default", state);
      return state;
  }
}
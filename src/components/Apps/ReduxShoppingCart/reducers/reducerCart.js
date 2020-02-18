import { actionTypes } from "../actions/actionTypes";

const initialState = {
  cartItemsQty: 0,
  cart: [],
  totalAmount: 0
}

export const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      return {
        ...state,
        cart: [...state.cart,
        { productId: action.productId, name: action.name, price: action.price }],
        totalAmount: state.totalAmount + action.price
      }
    case actionTypes.REMOVE_CART_ITEM:
      console.log("REMOVE ITEM", action.productIndex);
      return {
        ...state,
        state: state.cart.splice(action.productIndex, 1),
        totalAmount: state.totalAmount - action.price
      }
    default:
      return state;
  }
}


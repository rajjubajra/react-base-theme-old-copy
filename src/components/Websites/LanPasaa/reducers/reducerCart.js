import { actionTypes } from "../actions/actionTypes";

const initialState = {
  cart: [],
  totalPrice: 0,
  viewCart: false
}

export const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      state = {
        ...state,
        cart: [...state.cart, { id: action.productId, name: action.name, price: action.price }],
        totalPrice: state.totalPrice + action.price
      }
      return state;
    case actionTypes.DELETE_FROM_CART:
      state = {
        ...state,
        state: state.cart.splice(action.cartIndex, 1),
        totalPrice: Math.round(state.totalPrice) - Math.round(action.price)
      }
      return state;
    case actionTypes.CLEAR_CART:
      state = {
        ...state,
        cart: [],
        totalPrice: 0,
      }
      return state;
    case actionTypes.VIEW_CART:
      state = {
        ...state,
        viewCart: state.viewCart ? false : true
      }
      return state;
    default:
      return state;
  }
}

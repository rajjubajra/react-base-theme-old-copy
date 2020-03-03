import { actionTypes } from "../actions/actionTypes";

const initialState = {
  cart: [],
  totalPrice: 0,
  cartProductId: [],/** is to handle ADD_TO_CART and ADD_QTY */
  viewCart: false,
  set: []
}

export const reducerCart = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      state = {
        ...state,
        cart: [...state.cart, action.payload],
        cartProductId: [...state.cartProductId, action.payload.id],
        totalPrice: state.totalPrice + action.payload.price
      }
      return state;
    case actionTypes.ADD_QTY:
      state = {
        ...state,
        state: [state.cart[action.cartIndex].qty += 1,
        state.cart[action.cartIndex].amount += action.price],
        totalPrice: state.totalPrice + action.price
      }
      return state;
    case actionTypes.MINUS_QTY:
      state = {
        ...state,
        /** if qty is less then 1 delet entire row 
         * else minus the qty and amount */
        state: state.cart[action.cartIndex].qty === 1
          ? state.cart.splice(action.cartIndex, 1)
          : [state.cart[action.cartIndex].qty -= 1,
          state.cart[action.cartIndex].amount -= action.price],
        totalPrice: state.totalPrice - action.price,
        /** if product id not exist on "cart"
         * remove product id from "cartProductId"
         */
      }
      return state;
    case actionTypes.DELETE_FROM_CART:
      state = {
        ...state,
        state: state.cart.splice(action.cartIndex, 1),
        totalPrice: Math.round(state.totalPrice) - Math.round(action.amount)
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

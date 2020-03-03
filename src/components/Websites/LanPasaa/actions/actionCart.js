import { actionTypes } from "./actionTypes";


export const actionAddToCart = (id, name, price, qty, amount) => (
  {
    type: actionTypes.ADD_TO_CART,
    payload: { id, name, price, qty, amount }
  }
)

export const actionAddQty = (cartIndex, name, price) => (
  {
    type: actionTypes.ADD_QTY,
    cartIndex: cartIndex,
    price: price,

  }
)

export const actionMinusQty = (cartIndex, price) => (
  {
    type: actionTypes.MINUS_QTY,
    cartIndex: cartIndex,
    price: price
  }
)

export const actionDeleteFromCart = (cartIndex, amount) => (
  {
    type: actionTypes.DELETE_FROM_CART,
    cartIndex: cartIndex,
    amount: amount
  }
)

export const actionClearCart = () => ({
  type: actionTypes.CLEAR_CART
})

export const actionVeiwCart = () => ({
  type: actionTypes.VIEW_CART,
})




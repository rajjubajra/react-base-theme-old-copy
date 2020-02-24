import { actionTypes } from "./actionTypes";

export const actionAddToCart = (productId, name, price) => (
  {
    type: actionTypes.ADD_TO_CART,
    productId: productId,
    name: name,
    price: price,
  }
)

export const actionDeleteFromCart = (cartIndex, price) => (
  {
    type: actionTypes.DELETE_FROM_CART,
    cartIndex: cartIndex,
    price: price
  }
)

export const actionClearCart = () => ({
  type: actionTypes.CLEAR_CART
})

export const actionVeiwCart = () => ({
  type: actionTypes.VIEW_CART,
})


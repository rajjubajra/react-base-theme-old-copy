import { actionTypes } from "./actionTypes";

export const actionAddToCart = (productId, name, price) => (
  {
    type: actionTypes.ADD_TO_CART,
    productId: productId,
    name: name,
    price: price
  }
)

export const actionRemoveCartItem = (productIndex, price) => (
  {
    type: actionTypes.REMOVE_CART_ITEM,
    productIndex: productIndex,
    price: price
  }
)
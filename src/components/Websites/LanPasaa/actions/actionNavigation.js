import { actionTypes } from "./actionTypes";


export const actionCategoryNav = (category) => (
  {
    type: actionTypes.CATEGORY_NAV,
    payload: category
  }
)

export const actionViewItemDetails = (itemId, name, price) => (
  {
    type: actionTypes.ITEM_DETAILS,
    itemId: itemId,
    itemName: name,
    itemPrice: price
  }
)

export const actionClearItemDetails = () => (
  {
    type: actionTypes.ITEM_DETAILS_CLEAR,
  }
)

export const actionAddAnimationToTitle = () => (
  {
    type: actionTypes.ADD_ANIMATION_TO_TITLE
  }
)
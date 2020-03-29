import { actionTypes } from "../action/actionTypes"

const initalState = {
  recipe: [],
  id: '',
  status: false,
  error: null
}

export const reducerRecipe = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.RECIPE_DETAIL_START:
      state = {
        ...state,
        status: true,
      }
      return state;
    case actionTypes.RECIPE_DETAIL_FETCHED:
      state = {
        ...state,
        recipe: action.payload,
        status: true
      }
      return state;
    case actionTypes.RECIPE_DETAIL_ERROR:
      state = {
        ...state,
        error: action.payload,
        status: false
      }
      return state;
    default:
      return state;
  }
}
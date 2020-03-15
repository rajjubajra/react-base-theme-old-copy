import { actionTypes } from "../action/actionTypes"

const initalState = {
  recipe: [],
  id: '',
  status: false,
  error: null
}


export const reducerViewRecipe = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.FETCHING_RECIPE:
      state = {
        ...state,
        status: true,
      }
      return state;
    case actionTypes.FETCHED_RECIPE:
      state = {
        ...state,
        recipe: action.payload,
        id: action.id,
        status: true
      }
      return state;
    case actionTypes.FETCHING_RECIPE_ERROR:
      console.log('REDUCER RECIPE ID', action.id);
      state = {
        ...state,
        error: action.payload,
        id: action.id,
        status: false
      }
      return state;
    default:
      return state;
  }
}
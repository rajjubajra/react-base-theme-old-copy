import { actionTypes } from "../action/actionTypes"

const initalState = {
  result: [],
  hits: '',
  text: '',
  from: 0,
  to: 0,
  health: '',
  status: false,
  error: null,
  recipeIndex: ''
}

export const reducerSearch = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_START:
      state = {
        ...state,
        status: true,
      }
      return state;
    case actionTypes.SEARCH_FETCHED:
      state = {
        ...state,
        result: action.payload,
        hits: action.hits,
        text: action.text,
        from: action.from,
        to: action.to,
        health: action.health,
        status: true,
        recipeIndex: action.reducerSearch
      }
      return state;
    case actionTypes.SEARCH_ERROR:
      state = {
        ...state,
        error: action.payload,
        text: action.text,
        status: false
      }
      return state;
    default:
      return state;
  }
}


const initialIngredients = {
  recipeUrl: '',
}


export const reducerIngredients = (state = initialIngredients, action) => {

  switch (action.type) {
    case actionTypes.RECIPE_INGREDIENTS:
      return state = {
        ...state,
        recipeUrl: action.recipeUrl
      }
    case actionTypes.RECIPE_INGREDIENTS_CLEAR:
      return state = {
        ...state,
        recipeUrl: ''
      }
    default:
      return state;
  }
}
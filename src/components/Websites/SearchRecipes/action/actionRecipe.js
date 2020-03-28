import { actionTypes } from "./actionTypes";

export const actionRecipe = (index) => (
  {
    type: actionTypes.RECIPE_DETAIL,
    recipeIndex: index,
  }
);

export const actionIngredients = (recipeUrl) => (
  {
    type: actionTypes.RECIPE_INGREDIENTS,
    recipeUrl: recipeUrl
  }
)

export const actionBack = () => (
  {
    type: actionTypes.RECIPE_DETAIL_CLEAR,
  }
)
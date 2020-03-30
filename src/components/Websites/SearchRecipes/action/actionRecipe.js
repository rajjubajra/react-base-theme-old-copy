import { actionTypes } from "./actionTypes";
import axios from 'axios';
import { apiurl } from '../utilities/configapi';
require('dotenv').config();


export function actionRecipe(recipeUrl) {

  //const url = "https://jsonplaceholder.typicode.com/posts/";
  const apiId = process.env.REACT_APP_EDAMAM_APP_ID;
  const apiKey = process.env.REACT_APP_EDAMAM_APP_KEY;

  const url = `${apiurl.URL}/search?r=${recipeUrl}&app_id=${apiId}&app_key=${apiKey}`;

  console.log("ENV FILE", apiId, "key", apiKey, "url", url);

  return function (dispatch) {
    dispatch({ type: actionTypes.RECIPE_DETAIL_START })
    axios.get(url)
      .then((res) => {
        console.log("FETCHED DATA - res: ", res);
        dispatch({
          type: actionTypes.RECIPE_DETAIL_FETCHED,
          payload: res.data,
          hits: res.data.hits,
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.SEARCH_ERROR,
          payload: error,
          status: 'Error'
        })
      })
  }
}


export const actionIngredients = (recipeUrl) => (
  {
    type: actionTypes.RECIPE_INGREDIENTS,
    recipeUrl: recipeUrl,
  }
)


export const actionBack = () => (
  {
    type: actionTypes.RECIPE_INGREDIENTS_CLEAR,
  }
)


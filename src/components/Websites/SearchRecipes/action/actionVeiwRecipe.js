import { actionTypes } from './actionTypes';
import axios from 'axios';
require('dotenv').config();




/**
 * 
 * https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
 * 
 * GET https://api.spoonacular.com/recipes/{id}/information
 */



export function actionViewRecipe(id) {

  console.log("VIEW RECIPE ID", id);
  const api = process.env.REACT_APP_SPOONACULAR_API;
  //const url = "https://jsonplaceholder.typicode.com/posts/";
  const url = `https://api.spoonacular.com/recipes/${id}/similar&apiKey=${api}`;


  return function (dispatch) {
    dispatch({ type: actionTypes.FETCHING_RECIPE })
    axios.get(url, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        dispatch({
          type: actionTypes.FETCHED_RECIPE,
          id: id,
          payload: res.data,
          status: 'fetched'
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FETCHING_RECIPE_ERROR,
          id: id,
          payload: error,
          status: 'Error'
        })
      })
  }
}

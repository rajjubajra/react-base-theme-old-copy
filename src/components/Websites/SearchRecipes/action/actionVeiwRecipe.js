import { actionTypes } from './actionTypes';
import axios from 'axios';
import { apiurl } from '../utilities/configapi';
require('dotenv').config();




/**
 * 
 * https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
 * 
 * GET https://api.spoonacular.com/recipes/{id}/information
 * 
 * 
 //https://api.edamam.com/search?q=chicken&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&from=0&to=3&calories=591-722&health=alcohol-free
 */



export function actionViewRecipe(id) {

  console.log("VIEW RECIPE ID", id);
  const api = process.env.REACT_APP_SPOONACULAR_API;
  //const url = "https://jsonplaceholder.typicode.com/posts/";
  const url = `${apiurl.URL}/recipes/${id}/similar&apiKey=${api}&number=5`;


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

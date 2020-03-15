/**
 * To get started:
- Find your API key in your console.
- Put your API key in the URL of every request you make in the format:
- https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
- Now you can use endpoints following our documentation.
- Download an SDK to embed the API into your project or access the API via our Postman collection.

Example Request and Response
GET https://api.spoonacular.com/recipes/search?query=cheese&number=2

RECIPE INFORMATION
GET https://api.spoonacular.com/recipes/{id}/information

IMAGE EXAMPLE
So for "apple.jpg" the full path for 100x100 is https://spoonacular.com/cdn/ingredients_100x100/apple.jpg
A complete image path might look like this: https://spoonacular.com/recipeImages/579247-556x370.jpg
 * 
 */


import { actionTypes } from './actionTypes';
import axios from 'axios';
require('dotenv').config();

console.log(process.env.REACT_APP_SPOONACULAR_API);



export function actionSearch(text) {


  //const url = "https://jsonplaceholder.typicode.com/posts/";
  const api = process.env.REACT_APP_SPOONACULAR_API;
  const url = `https://api.spoonacular.com/recipes/search?query=${text}&number=2&apiKey=${api}`;

  console.log("ENV FILE", process.env);


  return function (dispatch) {
    dispatch({ type: actionTypes.SEARCH_START })
    axios.get(url)
      .then((res) => {
        dispatch({
          type: actionTypes.SEARCH_FETCHED,
          payload: res.data,
          text: text,
          status: 'fetched'
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

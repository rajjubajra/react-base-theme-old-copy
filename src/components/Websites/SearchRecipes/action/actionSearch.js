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
import { apiurl } from '../utilities/configapi';
require('dotenv').config();



export function actionSearch(text) {

  //const url = "https://jsonplaceholder.typicode.com/posts/";
  const apiId = process.env.REACT_APP_EDAMAM_APP_ID;
  const apiKey = process.env.REACT_APP_EDAMAM_APP_KEY;

  const url = `${apiurl.URL}/search?q=${text}&app_id=${apiId}&app_key=${apiKey}`;

  console.log("ENV FILE", apiId, "key", apiKey, "url", url);

  return function (dispatch) {
    dispatch({ type: actionTypes.SEARCH_START })
    axios.get(url)
      .then((res) => {
        console.log("SEARCH ACTION: ", res.data);
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

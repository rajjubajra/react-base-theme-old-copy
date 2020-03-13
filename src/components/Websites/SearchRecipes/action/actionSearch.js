/**
 * To get started:
- Find your API key in your console.
- Put your API key in the URL of every request you make in the format:
- https://api.spoonacular.com/food/products/search?query=yogurt&apiKey=API-KEY
- Now you can use endpoints following our documentation.
- Download an SDK to embed the API into your project or access the API via our Postman collection.

Example Request and Response
GET https://api.spoonacular.com/recipes/search?query=cheese&number=2
 * 
 */


import { actionTypes } from './actionTypes';
import axios from 'axios';
require('dotenv').config();


export function actionSearch(text) {


  //const url = "https://jsonplaceholder.typicode.com/posts/";
  const url = "https://api.spoonacular.com/recipes/search?query=cheese&number=2&apiKey=" + process.env.SPOONACULAR_API;


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

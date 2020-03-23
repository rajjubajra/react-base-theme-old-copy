import { actionTypes } from './actionTypes';
import axios from 'axios';
import { apiurl } from '../utilities/configapi';
require('dotenv').config();


export function actionSearch(text) {

  //const url = "https://jsonplaceholder.typicode.com/posts/";
  const apiId = process.env.REACT_APP_EDAMAM_APP_ID;
  const apiKey = process.env.REACT_APP_EDAMAM_APP_KEY;
  let from = 0;
  let to = 5;

  const url = `${apiurl.URL}/search?q=${text}&app_id=${apiId}&app_key=${apiKey}&from=${from}&to=${to}`;

  console.log("ENV FILE", apiId, "key", apiKey, "url", url);

  return function (dispatch) {
    dispatch({ type: actionTypes.SEARCH_START })
    console.log("AFTER SEARCH START", url)
    axios.get(url)
      .then((res) => {
        console.log("FETCHED DATA - res: ", res);
        dispatch({
          type: actionTypes.SEARCH_FETCHED,
          payload: res.data,
          hits: res.data.hits,
          searchtext: text,
          from: from,
          to: to,
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

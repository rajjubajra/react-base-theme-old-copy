import { actionTypes } from './actionTypes';
import axios from 'axios';


export function actionViewData() {

  const url = "https://jsonplaceholder.typicode.com/posts?_limit=5";

  return function (dispatch) {
    dispatch({ type: actionTypes.DATA_FETCHING })
    axios.get(url)
      .then((res) => {
        dispatch({
          type: actionTypes.DATA_FETCHED,
          payload: res.data,
          status: 'fetched'
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.DATA_ERROR,
          payload: error,
          status: 'Error'
        })
      })
  }
}
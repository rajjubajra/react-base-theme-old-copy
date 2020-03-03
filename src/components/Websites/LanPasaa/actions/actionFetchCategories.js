import axios from 'axios';
import { actionTypes } from './actionTypes';

export function actionFetchCategories() {
  return function (dispatch) {
    dispatch({ type: actionTypes.FETCH_LAN_PASAA_CATEGORIES_START })
    axios.get("http://localhost:3000/LanPasaa")
      .then((res) => {
        console.log("ACTION CATEGORY:", res.data[0].products);
        dispatch({
          type: actionTypes.FETCH_LAN_PASAA_CATEGORIES_RECEIVED,
          catgFetched: true, catgFetching: false,
          categories: res.data
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FETCH_LAN_PASAA_CATEGORIES_ERROR,
          error: error, catgFetched: false, catgFetching: false
        })
      })
  }
}
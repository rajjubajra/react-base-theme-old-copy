import axios from 'axios';
import { actionTypes } from './actionTypes';
import { LanPasaaApiUrl } from '../utilities/configapi';

export function actionFetchCategories() {
  return function (dispatch) {
    dispatch({ type: actionTypes.FETCH_LAN_PASAA_CATEGORIES_START })
    axios.get(LanPasaaApiUrl.URL)
      .then((res) => {
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
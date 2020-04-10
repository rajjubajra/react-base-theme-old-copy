import { actionTypes } from "./actionTypes";
import axios from 'axios';
import { summaryapi } from '../utilities/configapi';

export function actionSummary() {

  const url = summaryapi.URL;

  return function (dispatch) {
    dispatch({ type: actionTypes.API_FETCHING })
    axios.get(url)
      .then((res) => {
        dispatch({
          type: actionTypes.API_FETCHED,
          summary: res.data.Countries,
          payload: res.data.Countries.map((item, index) => {
            return [item.CountryCode, item.TotalConfirmed]
          })
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.API_ERROR,
          payload: error,
          status: 'Error'
        })
      })
  }
}
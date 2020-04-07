import { actionTypes } from "./actionTypes";
import axios from 'axios';
import { dayONeTotal } from '../utilities/configapi';


export function actionDayOneTotal(country) {

  const url = `${dayONeTotal.URL}/${country}/status/confirmed`;

  return function (dispatch) {
    dispatch({ type: actionTypes.API_DAYONETOTAL_FETCHING })
    axios.get(url)
      .then((res) => {
        dispatch({
          type: actionTypes.API_DAYONETOTAL_FETCHED,
          summary: res.data,
          payload: res.data.map((item, index) => {
            let month = new Date(item.Date).getMonth();
            return [month, item.Cases];
          }),
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.API_DAYONETOTAL_ERROR,
          payload: error,
          status: 'Error'
        })
      })
  }
}
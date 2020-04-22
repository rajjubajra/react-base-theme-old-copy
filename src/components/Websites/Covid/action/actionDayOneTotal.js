import { actionTypes } from "./actionTypes";
import axios from 'axios';
import { dayONeTotal } from '../utilities/configapi';


const monthname = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];



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
            let day = new Date(item.Date).getDate();
            let year = new Date(item.Date).getFullYear();
            return [`${day}/${monthname[month]}/${year}`, item.Cases];
          }),
          recharts_data: res.data.map((item, index) => {
            let month = new Date(item.Date).getMonth();
            let day = new Date(item.Date).getDate();
            return {
              Date: `${day}/${monthname[month]}`,
              Cases: item.Cases
            };
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
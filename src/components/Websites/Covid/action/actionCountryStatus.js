import axios from 'axios';
import { countryStatus } from '../utilities/configapi';
import { actionTypes } from './actionTypes';

const monthname = ["Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export function actionCountryStatus(country) {

  const url = `${countryStatus.URL}/${country}/status/confirmed`;

  return function (dispatch) {
    dispatch({ type: actionTypes.COUNTRY_STATUS_FETCHING })
    axios.get(url)
      .then((res) => {
        dispatch({
          type: actionTypes.COUNTRY_STATUS_FETCHED,
          summary: res.data,
          payload: res.data.map((item, index) => {
            let month = new Date(item.Date).getMonth();
            let day = new Date(item.Date).getDate();
            let year = new Date(item.Date).getFullYear();
            return [`${day}/${monthname[month]}/${year}`, item.Confirmed];
          }),
          recharts_data: res.data.filter((item, index) => {
            return !item.Province;
          })

          // res.data.map((item, index) => {
          //   let month = new Date(item.Date).getMonth();
          //   let day = new Date(item.Date).getDate();
          //   let year = new Date(item.Date).getFullYear();
          //   if (!item.Province) {
          //     return {
          //       Date: `${day}/${monthname[month]}`,
          //       Cases: item.Confirmed,
          //       Deaths: item.Deaths,
          //       Recovered: item.Recovered,
          //       Active: item.Active,
          //     }
          //   } else {
          //   }
          // }),
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.COUNTRY_STATUS_ERROR,
          payload: error,
          status: 'Error'
        })
      })
  }
}
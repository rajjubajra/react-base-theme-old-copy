import axios from 'axios';
import { actionTypes } from './actionTypes';



export const actionFetchData = (group) => {

  return function (dispatch) {
    dispatch({ type: actionTypes.FETCH_LAN_PASAA_DATA_START });
    // axios.get("https://my-json-server.typicode.com/rajjubajra/lan-pasaa-json/categories")
    axios.get("http://localhost:3000/LanPasaa")
      .then((res) => {
        dispatch({
          type: actionTypes.FETCH_LAN_PASAA_DATA_RECEIVED,
          feched: true, fetching: false,
          // eslint-disable-next-line array-callback-return
          payload: res.data.filter(element => {
            if (element.group === group) return element
          })
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.FETCH_LAN_PASAA_DATA_ERROR,
          fetching: false, fetched: false, error: error
        })
      })
  }
}
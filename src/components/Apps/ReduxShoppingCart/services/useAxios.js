import axios from 'axios';
import { actionTypes } from '../actions/actionTypes';


export function useAxios(url, actionType) {
  return function (dispatch) {
    axios.get(url)
      .then((res) => {
        dispatch({ type: actionType, payload: res.data })
      })
      .catch((err) => {
        dispatch({ type: actionTypes.FETCH_ERROR, payload: err })
      })
  }
}
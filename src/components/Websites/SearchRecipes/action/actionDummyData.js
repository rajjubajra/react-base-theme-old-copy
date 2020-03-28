import { actionTypes } from './actionTypes';
import axios from 'axios';


export function actionDummyData() {

  const url = "http://localhost:3000/edamam_recipe";

  return function (dispatch) {
    dispatch({ type: actionTypes.DUMMY_DATA_START })

    axios.get(url)
      .then((res) => {
        console.log("DUMMY DATA RES", res.data[0]);
        dispatch({
          type: actionTypes.DUMMY_DATA_FETCHED,
          payload: res.data[0],
          hits: res.data[0].hits,
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.DUMMY_DATA_ERROR,
          payload: error,
          status: 'Error'
        })
      })
  }
}

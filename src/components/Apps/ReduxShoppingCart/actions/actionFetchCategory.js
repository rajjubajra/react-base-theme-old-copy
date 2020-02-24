import axios from 'axios';
import { actionTypes } from './actionTypes';


export function actionFetchCategory() {
  //console.log("action fetch category");
  return function (dispatch) {
    dispatch({ type: actionTypes.FETCH_CATEGORY_START });
    axios.get("https://my-json-server.typicode.com/rajjubajra/shopping-cart/categories")
      .then((res) => {
        dispatch({
          type: actionTypes.FETCH_CATEGORY_RECEIVED,
          payload: res.data
        })
      })
      .catch((error) => {
        dispatch({ type: actionTypes.FETCH_CATEGORY_ERROR, payload: error })
      })
  }
}

export function actionCategoryId(id) {
  return {
    type: actionTypes.CATEGORY_INDEX_OF_PRODUCTS,
    id: id
  }
}

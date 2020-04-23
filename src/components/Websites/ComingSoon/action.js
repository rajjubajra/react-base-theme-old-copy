import axios from 'axios';
import { actionTypes } from './actionTypes';
import { comingsoon_contents, config_logo } from './utilities/configApi';

/** FETCH TEXT DATA */
export const actionFetchText = () => {

  return function (dispatch) {
    dispatch({ type: actionTypes.TEXT_DATA_FETCHING });

    axios.get(comingsoon_contents.URL)
      .then((res) => {
        dispatch({
          type: actionTypes.TEXT_DATA_FETCHED,
          feched: true,
          fetching: false,
          body: res.data.data.attributes.body,
          contact: res.data.data.attributes.field_contact,
          btnWebHosting: res.data.data.attributes.field_web_hosting,
          btnFreeImage: res.data.data.attributes.field_image_search,
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.TEXT_DATA_FETCH_EROOR,
          fetching: false,
          fetched: false,
          error: error
        })
      })
  }
}

/** FETCH LOGO DATA */
export const actionFetchLogo = () => {

  return function (dispatch) {
    dispatch({ type: actionTypes.LOGO_FETCHING });

    axios.get(config_logo.URL)
      .then((res) => {
        dispatch({
          type: actionTypes.LOGO_FETCHED,
          feched: true,
          fetching: false,
          logo: res.data.included[1].attributes.uri,
          logoSquare: res.data.included[0].attributes.uri
        })
      })
      .catch((error) => {
        dispatch({
          type: actionTypes.LOGO_FETCH_EROOR,
          fetching: false,
          fetched: false,
          error: error
        })
      })
  }
}

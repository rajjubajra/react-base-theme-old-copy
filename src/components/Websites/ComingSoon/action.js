import axios from 'axios';
import { actionTypes } from './actionTypes';
import { comingsoon_contents, config_logo } from './utilities/configApi';






/** FETCH TEXT DATA */
export const actionFetchText = () => {


  return function (dispatch) {
    dispatch({ type: actionTypes.TEXT_DATA_FETCHING });

    axios({
      method: 'GET',
      url: comingsoon_contents.URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
      .then((res) => {
        console.log(res);
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
          type: actionTypes.TEXT_DATA_FETCH_ERROR,
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

    axios({
      method: 'GET',
      url: config_logo.URL,
      headers: {
        'Accept': 'application/vnd.api+json'
      }
    })
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
          type: actionTypes.LOGO_FETCH_ERROR,
          fetching: false,
          fetched: false,
          error: error
        })
      })
  }
}


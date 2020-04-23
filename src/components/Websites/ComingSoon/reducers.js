import { actionTypes } from './actionTypes';

const initialTextData = {
  feched: false,
  fetching: false,
  body: '',
  contact: '',
  btnWebHosting: '',
  btnFreeImage: '',
}

export const reducerFetchText = (state = initialTextData, action) => {
  switch (action.type) {
    case actionTypes.TEXT_DATA_FETCHING:
      state = {
        fetching: true,
      }
      return state;
    case actionTypes.TEXT_DATA_FETCHED:
      state = {
        fetching: false,
        fetched: true,
        body: action.body.value,
        contactTitle: action.contact.title,
        btnWebHostingTitle: action.btnWebHosting.title,
        btnWebHostingUri: action.btnWebHosting.uri,
        btnFreeImageTitle: action.btnFreeImage.title,
        btnFreeImageUri: action.btnFreeImage.uri
      }
      return state;
    case actionTypes.TEXT_DATA_FETCH_ERROR:
      state = {
        fetching: false,
        fetched: false,
        error: action.error
      }
      return state;
    default:
      return state;
  }
}

const initialLogoData = {
  feched: false,
  fetching: false,
  logo: '',
  logoSquare: ''
}

export const reducerFetchLogo = (state = initialLogoData, action) => {
  switch (action.type) {
    case actionTypes.LOGO_FETCHING:
      state = {
        fetching: true,
        fetched: false,
      }
      return state;
    case actionTypes.LOGO_FETCHED:
      state = {
        fetched: true,
        fetching: false,
        logo: action.logo.url,
        logoSquare: action.logoSquare.url
      }
      return state;
    default:
      return state;
  }
}
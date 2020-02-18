import { createLogger } from 'redux-logger';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';


/** REDUCERS */
import { reducerFetchCategory } from './reducers/reducerFetchCategory';
import { reducerCart } from './reducers/reducerCart';


const reducers = combineReducers({ reducerFetchCategory, reducerCart });
const middleware = applyMiddleware(thunk, createLogger());


export const store = createStore(
  reducers,
  middleware
);


// store.dispatch((dispatch) => {
//   dispatch({ type: actionTypes.FETCH_CATEGORY })
//   Axios.get("https://my-json-server.typicode.com/fmartinsba/shopping-cart/categories")
//     .then((res) => {
//       dispatch({ type: actionTypes.RECEIVE_CATEGORY, payload: res.data })
//     })
//     .catch((err) => {
//       dispatch({ type: actionTypes.FETCH_ERROR, payload: err })
//     })
// });




// import { applyMiddleware, createStore } from 'redux';
// import { createLogger } from 'redux-logger';
// import thunk from 'redux-thunk';
// import axios from 'axios';


// const initalState = {
//   fetching: false,
//   fetched: false,
//   categories: [],
//   error: null
// }

// const reducers = (state = initalState, action) => {
//   switch (action.type) {
//     case "FETCH_CATEGORY_START": {
//       return { ...state, fetching: true, fatched: false }
//     }
//     case "FETCH_CATEGORY_ERROR": {
//       return { ...state, fetching: false, fetched: false, error: action.payload }
//     }
//     case "FETCH_CATEGORY_RECEIVED": {
//       return { ...state, fetching: false, fetched: true, categories: action.payload }
//     }
//     default:
//       return state;
//   }
// }

// const middleware = applyMiddleware(thunk, createLogger());
// export const store = createStore(reducers, middleware);

// store.dispatch((dispatch) => {

//   dispatch({ type: "FETCH_CATEGORY_START" });
//   axios.get("https://my-json-server.typicode.com/fmartinsba/shopping-cart/categories")
//     .then((res) => {
//       dispatch({ type: "FETCH_CATEGORY_RECEIVED", payload: res.data })
//     })
//     .catch((err) => {
//       dispatch({ type: "FETCH_CATEGORY_ERROR", payload: err })
//     })
// })
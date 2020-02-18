import { createLogger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from 'redux';

import todoReducer from './reducers/todoReducer';
//import thunk from 'redux-thunk';

//in order to load data into the localstorage
let initialState = {}
const persistedState = localStorage.getItem('reduxState')
if (persistedState) {
  initialState = JSON.parse(persistedState)
}

//console.log("PERSISTEDstate", persistedState);

const rootReducer = combineReducers({ todoReducer })
//console.log('ROOT REDUCERS', rootReducer);


export const store = createStore(
  rootReducer,
  initialState,
  applyMiddleware(createLogger())
);

//load data into localstorage
store.subscribe(() => {
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})


//console.log("GET STATE", store.getState().todoReducer.todos);
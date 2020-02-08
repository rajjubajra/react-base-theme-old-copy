import { createLogger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from 'redux';

import todoReducer from './reducers/todoReducer';
//import thunk from 'redux-thunk';

export const store = createStore(combineReducers(
  { todoReducer }),
  {},
  applyMiddleware(createLogger()));


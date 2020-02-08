import { createLogger } from "redux-logger";
import { createStore, combineReducers, applyMiddleware } from "redux";

import mathReducer from './reducers/mathReducer';
import userReducer from './reducers/userReducer';
import counterReducer from './reducers/counterReducer';

export const store = createStore(combineReducers({
  mathReducer,
  userReducer,
  counterReducer
}), {}, applyMiddleware(createLogger()));


// store.subscribe(() => {
//   console.log("store updated !", store.getState());
// });
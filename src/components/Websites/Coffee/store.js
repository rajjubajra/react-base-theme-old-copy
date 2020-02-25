import { createStore, combineReducers } from 'redux';
import { applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

const initialState = {
  data: []
}
const reducerFetchData = (state = initialState, action) => {
  return state;
}

const middleware = applyMiddleware(createLogger());

const reducer = combineReducers({ reducerFetchData });

export const store = createStore(reducer, middleware);


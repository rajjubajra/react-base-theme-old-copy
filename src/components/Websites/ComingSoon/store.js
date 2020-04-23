import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { reducerFetchText, reducerFetchLogo } from './reducers';


const reducer = combineReducers(
  {
    reducerFetchText,
    reducerFetchLogo,
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);

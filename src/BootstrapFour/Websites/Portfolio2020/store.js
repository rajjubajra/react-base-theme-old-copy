import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerSelectGroup } from './reducers/reducersSelectGroup';
import { reducerSelectColourMode } from './reducers/reducerSelectColourMode';


const reducer = combineReducers(
  {
    reducerSelectGroup,
    reducerSelectColourMode
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);

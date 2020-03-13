import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerSearch } from './reducers/reducerSearch';
import { reducerViewData } from './reducers/reducerViewData';

const reducer = combineReducers(
  {
    reducerViewData,
    reducerSearch
  }
)

const middleWare = applyMiddleware(thunk, createLogger());
export const store = createStore(reducer, middleWare);


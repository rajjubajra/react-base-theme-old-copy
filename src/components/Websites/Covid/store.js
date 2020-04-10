import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { reducerSummary } from './reducer/reducerSummary';
import { reducerDayOneTotal } from './reducer/reducerDayOneTotal';
import { reducerCountryStatus } from './reducer/reducerCountryStatus';


const reducer = combineReducers(
  {
    reducerSummary,
    reducerDayOneTotal,
    reducerCountryStatus,
  }
)


const middleWare = applyMiddleware(thunk, createLogger());
export const store = createStore(reducer, middleWare);


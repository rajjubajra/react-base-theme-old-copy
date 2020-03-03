import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { reducerFetchData } from './reducers/reducerFetchData';
//import { reducerFetchCategories } from './reducers/reducerFetchCategories';
import { reducerFetchProducts } from './reducers/reducerFetchProducts';
import { reducerNavigation } from './reducers/reducerNavigation';
import { reducerCart } from './reducers/reducerCart';

const reducer = combineReducers(
  {
    reducerFetchProducts,
    reducerFetchData,
    reducerNavigation,

    reducerCart
  }
);

const middleware = applyMiddleware(thunk, createLogger());

export const store = createStore(reducer, middleware);

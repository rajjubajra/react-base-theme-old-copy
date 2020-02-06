import { createStore, combineReducers } from 'redux';

import pasaaInfoReducer from './reducers/pasaaInfoReducer';
import routerReducer from './reducers/routerReducer';


export const store = createStore(combineReducers({
  pasaaInfoReducer,
  routerReducer
}));

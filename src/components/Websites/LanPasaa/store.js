import { createStore, combineReducers } from 'redux';

import pasaaInfoReducer from './reducers/pasaaInfoReducer';


export const store = createStore(combineReducers({
  pasaaInfoReducer,
}));

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerSearch } from './reducers/reducerSearch';
import { reducerDummyData, reducerIngredients } from './reducers/reducerDummyData';
// import { reducerViewData } from './reducers/reducerViewData';
// import { reducerViewRecipe } from './reducers/reducerViewRecipe';

const reducer = combineReducers(
  {
    reducerSearch,
    reducerDummyData,
    reducerIngredients
  }
)

const middleWare = applyMiddleware(thunk, createLogger());
export const store = createStore(reducer, middleWare);


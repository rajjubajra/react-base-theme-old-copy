import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { reducerSearch, reducerIngredients } from './reducers/reducerSearch';
import { reducerDummyData } from './reducers/reducerDummyData';
import { reducerRecipe } from './reducers/reducerRecipe';
// import { reducerViewData } from './reducers/reducerViewData';
// import { reducerViewRecipe } from './reducers/reducerViewRecipe';

const reducer = combineReducers(
  {
    reducerSearch,
    reducerDummyData,
    reducerIngredients,
    reducerRecipe,
  }
)

const middleWare = applyMiddleware(thunk, createLogger());
export const store = createStore(reducer, middleWare);


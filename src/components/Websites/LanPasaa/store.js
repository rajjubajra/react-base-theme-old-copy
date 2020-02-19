import { createStore, applyMiddleware } from 'redux';

const reducer = (state = {}, action) => {
  return state;
}

const middleware = applyMiddleware();

export const store = createStore(reducer, middleware);

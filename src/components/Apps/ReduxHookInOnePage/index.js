import React from 'react';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';

import App from './components/App';

const initialStateMath = {
  result: 5,
  lastValue: []
}

const mathReducer = (state = initialStateMath, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'ADD':
      state = {
        ...state,
        result: state.result + action.payload,
        lastValue: [...state.lastValue, { number: action.payload, result: state.result + action.payload }]
      }
      // state.lastValue.push(action.payload)
      break;
    case 'SUBSTRACT':
      //state.result -= action.payload;
      state = {
        ...state,
        result: state.result - action.payload,
        lastValue: [...state.lastValue, action.payload]
      }
      //state.lastValue.push(action.payload)
      break;
  }
  return state;
}

const initialStateUser = {
  name: 'Max',
  age: 20
}
const userReducer = (state = initialStateUser, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case 'SET_NAME':
      state = {
        ...state,
        name: action.payload,
      }
      // state.lastValue.push(action.payload)
      break;
    case 'SET_AGE':
      //state.result -= action.payload;
      state = {
        ...state,
        age: action.payload,
      }
      //state.lastValue.push(action.payload)
      break;
  }
  return state;
}
/** custom example middleware */
// const myLoagger = (store) => (next) => (action) => {
//   console.log("Logged Action:", action);
//   next(action);
// };

const store = createStore(combineReducers(
  { mathReducer, userReducer }),
  {},
  applyMiddleware(createLogger()));


store.subscribe(() => {
  console.log("store updated !", store.getState());
});


export default function () {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )

}
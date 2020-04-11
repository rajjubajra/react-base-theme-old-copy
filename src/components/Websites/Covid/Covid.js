import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import RouterCovid from './contents/RouterCovid';

const Covid = () => {
  return (
    <Provider store={store}>
      <RouterCovid />
    </Provider>
  )
}
export default Covid;
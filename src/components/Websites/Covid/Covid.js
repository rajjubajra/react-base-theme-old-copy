import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import RouterCovid from './contents/RouterCovid';
import Nav from './contents/Nav';

const Covid = () => {
  return (

    <Provider store={store}>
      <Nav />
      <RouterCovid />
    </Provider>

  )
}
export default Covid;
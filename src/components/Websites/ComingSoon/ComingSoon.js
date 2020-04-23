import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store';
import Page from './Page';


const ComingSoon = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  )
}

export default ComingSoon

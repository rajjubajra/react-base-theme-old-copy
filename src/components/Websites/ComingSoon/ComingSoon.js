import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store';
import Page from './Page';
import FormInBox from './FormInBox';


const ComingSoon = () => {
  return (
    <Provider store={store}>
      <Page />
      <FormInBox />
    </Provider>
  )
}

export default ComingSoon

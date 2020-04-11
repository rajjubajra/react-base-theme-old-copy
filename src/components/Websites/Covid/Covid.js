import React from 'react'
import { Provider } from 'react-redux';
import { store } from './store';
import RouterCovid from './contents/RouterCovid';

const Covid = () => {
  return (

    <Provider store={store}>
      <div className="covid-19">
        <RouterCovid />
      </div>

    </Provider>

  )
}
export default Covid;
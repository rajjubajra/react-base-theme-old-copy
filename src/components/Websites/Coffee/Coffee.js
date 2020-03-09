import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';

import RouteCoffee from './contents/RouteCoffee';

const Coffee = () => {
  return (
    /** DO NOT DEFINE css div classs and component in this page
    *  IT EFFECTS IN ALL THE other components 
    *  This page is only for Provider and Store
   */

    <>
      <Provider store={store}>
        <RouteCoffee />
      </Provider>

    </>


  )
}

export default Coffee

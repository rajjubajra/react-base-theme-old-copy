import React from 'react'
import RouterPortfolio2020 from './contents/RouterPortfolio2020'
import { Provider } from 'react-redux';
import { store } from './store';

function Portfolio2020() {
  /** DO NOT DEFINE css div classs and component in this page
    *  IT EFFECTS IN ALL THE other components 
    *  This page is only for Switch / Route 
   */
  return (
    <Provider store={store}>
      <RouterPortfolio2020 />
    </Provider>
  )
}

export default Portfolio2020

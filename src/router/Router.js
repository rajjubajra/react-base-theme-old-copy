import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RouterReUseComponents from './RouterReUseComponents';
import RouterApps from './RouterApps';
import RouterWebsites from './RouterWebsites';



const Router = () => {

  return (
    <BrowserRouter>
      <RouterReUseComponents />
      <RouterApps />
      <RouterWebsites />
    </BrowserRouter>
  )
}

export default Router

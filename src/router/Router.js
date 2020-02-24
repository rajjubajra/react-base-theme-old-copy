import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RouterReUseComponents from './RouterReUseComponents';
import RouterApps from './RouterApps';
import RouterWebsites from './RouterWebsites';
import CopyRightFooter from '../components/Footers/CopyRightFooter';
import LanPasaa from '../components/Websites/LanPasaa/LanPasaa';



const Router = () => {

  return (
    <BrowserRouter>
      <RouterReUseComponents />
      <RouterApps />
      <RouterWebsites />
      <LanPasaa />
      <CopyRightFooter />
    </BrowserRouter>

  )
}

export default Router

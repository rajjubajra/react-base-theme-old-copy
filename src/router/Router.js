import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import RouterReUseComponents from './RouterReUseComponents';
import RouterApps from './RouterApps';
import RouterWebsites from './RouterWebsites';
import CopyRightFooter from '../components/Footers/CopyRightFooter';
import LanPasaa from '../components/Websites/LanPasaa/LanPasaa';
import Coffee from '../components/Websites/Coffee/Coffee';



const Router = () => {

  return (
    <>
      <BrowserRouter>
        <RouterReUseComponents />
        <RouterApps />
        <RouterWebsites />

        {/** WEBSITES */}
        <LanPasaa />
        <Coffee />

        <div className="copy-right-footer">
          <CopyRightFooter />
        </div>

      </BrowserRouter>

    </>

  )
}

export default Router

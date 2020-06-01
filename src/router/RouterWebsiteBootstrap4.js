import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import WebsitesBootsrap from '../components/WebsitesBootstrap/WebsitesBootstrap';
import Portfolio2020 from '../components/WebsitesBootstrap/Bootstrap_4/Portfolio2020/Portfolio2020';
import MeghaMenu from '../components/Navigation/MeghaMenu';

export default function RouterWebsiteBootstrap4() {

  const [btnShowHide] = useState(true);

  return (
    <>
      <Route path="/websites-bootstrap">
        <div style={{ display: 'flex', flexDirection: 'column' }} className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={`App ${btnShowHide} ? 'show' : 'hide'`}>
            <MeghaMenu />
          </div>
          <div>
            <WebsitesBootsrap />
          </div>
        </div>
      </Route>

      {/** BOOTSTRAP 4 WEBSITES */}
      <Portfolio2020 />


    </>
  )
}

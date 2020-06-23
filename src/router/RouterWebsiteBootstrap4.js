import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import BootsrapFour from '../components/BootstrapFour/BootstrapFour';
import Portfolio2020 from '../components/BootstrapFour/Websites/Portfolio2020/Portfolio2020';
import MeghaMenuBootstrap4 from '../components/Navigation/MeghaMenuBootstrap4';

export default function RouterWebsiteBootstrap4() {

  const [btnShowHide] = useState(true);

  return (
    <>
      <Route path="/websites-bootstrap">
        <div style={{ display: 'flex', flexDirection: 'column' }} className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={`App ${btnShowHide} ? 'show' : 'hide'`}>
            <MeghaMenuBootstrap4 />
          </div>
          <div>
            <BootsrapFour />
          </div>
        </div>
      </Route>

      {/** BOOTSTRAP 4 WEBSITES */}
      <Portfolio2020 />


    </>
  )
}

import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import BootsrapFour from '../BootstrapFour/BootstrapFour';
import Portfolio2020 from '../BootstrapFour/Websites/Portfolio2020/Portfolio2020';
import MeghaMenuBootstrap4 from '../components/Navigation/MeghaMenuBootstrap4';
import RouteLanding from '../BootstrapFour/B4Components/B4LandingPage/RouteLanding';
import MusicZero from '../BootstrapFour/Websites/MusicZero/MusicZero';


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



      {/** LANDING PAGE */}
      <RouteLanding />




      {/** BOOTSTRAP 4 WEBSITES */}
      <Portfolio2020 />
      <MusicZero />



    </>
  )
}

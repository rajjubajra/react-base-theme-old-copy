import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import CopyRightFooter from '../components/CopyRightFooter/CopyRightFooter';
import RouterComponents from './RouterComponents';
import RouterWebsites from './RouterWebsites';
import RouterWebsiteBootstrap4 from './RouterWebsiteBootstrap4';
import MeghaMenu from '../components/Navigation/MeghaMenu';
import ComingSoon from '../components/Websites/ComingSoon/ComingSoon';


/**
 * NOTE: 
 * CSS class "App" is only for Custom-made css.
 * Do not use "App" class on Bootstrap or other CSS framework 
 */


const Router = () => {

  const [btnShowHide] = useState(true);

  return (
    <>
      <BrowserRouter>

        <Switch>
          <Route exact path="/" >
            <div className={`App ${btnShowHide} ? 'with-menu' : 'without-menu'`}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <ComingSoon />
            </div>
          </Route>
        </Switch>

        {/** RE-USABLE COMPONENTS *************************************/}
        <Switch>
          <RouterComponents />
        </Switch>

        {/** WEBSITES PAGE *************************************/}
        <Switch>
          <RouterWebsites />
        </Switch>

        {/** WEBSITES WITH BOOTSTRAP-4  *************************************/}
        <Switch>
          <RouterWebsiteBootstrap4 />
        </Switch>


        {/** COPYRIGHT COMPONENT  *************************************/}
        <div className="App copy-right-footer">
          <CopyRightFooter />
        </div>

      </BrowserRouter>
    </>
  )
}

export default Router

import React from 'react';
import PageLanPasaaLanding from './page/PageLanPasaaLanding';
import PageLanPasaaAbout from './page/PageLanPasaaAbout';
import PageLanPasaaContact from './page/PageLanPasaaContact';
import PageLanPasaaShop from './page/PageLanPasaaShop';
import { Switch, Route } from 'react-router-dom';


const RouteLanPasaa = () => {

  return (
    /** DO NOT DEFINE css div classs and component in this page
     *  IT EFFECTS IN ALL THE other components 
     *  This page is only for Switch / Route 
    */
    <>
      <Switch>
        <Route path="/lanpasaa" component={PageLanPasaaLanding} />
        <Route path="/lanpasaa-shop" component={PageLanPasaaShop} />
        <Route path="/lanpasaa-about" component={PageLanPasaaAbout} />
        <Route path="/lanpasaa-contact" component={PageLanPasaaContact} />
      </Switch>
    </>
  )
}
export default RouteLanPasaa

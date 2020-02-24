import React from 'react';
import PageLanPasaaLanding from './page/PageLanPasaaLanding';
import PageLanPasaaAbout from './page/PageLanPasaaShop';
import PageLanPasaaContact from './page/PageLanPasaaContact';
import PageLanPasaaShop from './page/PageLanPasaaShop';
import { Switch, Route } from 'react-router-dom';


const LanPasaa = () => {

  return (
    <div className="lanpasaa" >
      <Switch>
        <Route path="/lanpasaa" component={PageLanPasaaLanding} />
        <Route path="/lanpasaa-shop" component={PageLanPasaaShop} />
        <Route path="/lanpasaa-about" component={PageLanPasaaAbout} />
        <Route path="/lanpasaa-contact" component={PageLanPasaaContact} />
      </Switch>

    </div >
  )
}
export default LanPasaa

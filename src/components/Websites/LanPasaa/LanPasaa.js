import React from 'react'
import { Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

import PageLanPasaaLanding from './components/page/PageLanPasaaLanding';
import PageLanPasaaAbout from './components/page/PageLanPasaaAbout';
import PageLanPasaaContact from './components/page/PageLanPasaaContact';
import PageLanPasaaShop from './components/page/PageLanPasaaShop';


/** LAN PASAA */
const LanPasaa = () => {


  return (
    <Provider store={store}>
      <Switch>
        <Route path="/lanpasaa" component={PageLanPasaaLanding} />
        <Route path="/lanpasaa-shop" component={PageLanPasaaShop} />
        <Route path="/lanpasaa-about" component={PageLanPasaaAbout} />
        <Route path="/lanpasaa-contact" component={PageLanPasaaContact} />
      </Switch>
    </Provider>

  )
}
export default LanPasaa
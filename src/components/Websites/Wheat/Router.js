import React from 'react'
import { Switch, Route } from 'react-router-dom';

/** WHEAT */
import PageWheatLanding from './PageWheatLanding';
import PageWheatAbout from './PageWheatAbout';
import PageWheatService from './PageWheatService';
import PageWheatTeam from './PageWheatTeam';
import PageWheatContact from './PageWheatContact';


const Router = () => {
  return (
    <Switch>
      {/** WHEAT */}
      <Route exact path="/" component={PageWheatLanding} />
      <Route path="/wheat-aboutus" component={PageWheatAbout} />
      <Route path="/wheat-services" component={PageWheatService} />
      <Route path="/wheat-ourteam" component={PageWheatTeam} />
      <Route path="/wheat-contact" component={PageWheatContact} />
    </Switch>

  )
}

export default Router

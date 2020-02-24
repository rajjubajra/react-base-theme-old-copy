import React from 'react'
import { Switch, Route } from 'react-router-dom';

/** LOTUS */
import Lotus from '../components/Websites/Lotus/Lotus';
import PageLotusAbout from '../components/Websites/Lotus/PageLotusAbout';
import PageLotusWhatWeDo from '../components/Websites/Lotus/PageLotusWhatWeDo';
import PageLotusContact from '../components/Websites/Lotus/PageLotusContact';
import PageLotusFAQ from '../components/Websites/Lotus/PageLotusFAQ';

/** WHEAT */
import Wheat from '../components/Websites/Wheat/Wheat';
import PageWheatAbout from '../components/Websites/Wheat/PageWheatAbout';
import PageWheatService from '../components/Websites/Wheat/PageWheatService';
import PageWheatTeam from '../components/Websites/Wheat/PageWheatTeam';
import PageWheatContact from '../components/Websites/Wheat/PageWheatContact';




const RouterWebsites = () => {
  return (
    <Switch>
      {/**  WEBSITE TEMPLATE   */}
      {/** LOTUS */}
      <Route path="/lotus" component={Lotus} />
      <Route path="/lotus-About-us" component={PageLotusAbout} />
      <Route path='/lotus-What-we-do' component={PageLotusWhatWeDo} />
      <Route path='/lotus-contact' component={PageLotusContact} />
      <Route path='/lotus-faq' component={PageLotusFAQ} />


      {/** WHEAT */}
      <Route path="/wheat" component={Wheat} />
      <Route path="/wheat-aboutus" component={PageWheatAbout} />
      <Route path="/wheat-services" component={PageWheatService} />
      <Route path="/wheat-ourteam" component={PageWheatTeam} />
      <Route path="/wheat-contact" component={PageWheatContact} />

    </Switch>
  )
}

export default RouterWebsites

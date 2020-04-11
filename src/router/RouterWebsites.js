import React from 'react'
import { Switch, Route } from 'react-router-dom';

/** LOTUS */
import Lotus from '../components/Websites/Lotus/Lotus';
import PageLotusAbout from '../components/Websites/Lotus/PageLotusAbout';
import PageLotusWhatWeDo from '../components/Websites/Lotus/PageLotusWhatWeDo';
import PageLotusContact from '../components/Websites/Lotus/PageLotusContact';
import PageLotusFAQ from '../components/Websites/Lotus/PageLotusFAQ';




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


    </Switch>
  )
}

export default RouterWebsites

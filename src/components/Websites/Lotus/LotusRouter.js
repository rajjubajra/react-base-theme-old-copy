import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Lotus from './Lotus';
import PageLotusAbout from './PageLotusAbout';
import PageLotusWhatWeDo from './PageLotusWhatWeDo';
import PageLotusContact from './PageLotusContact';
import PageLotusFAQ from './PageLotusFAQ';


const LotusRouter = () => {
  return (
    <Switch>
      <Route path="/lotus" component={Lotus} />
      <Route path="/lotus-About-us" component={PageLotusAbout} />
      <Route path='/lotus-What-we-do' component={PageLotusWhatWeDo} />
      <Route path='/lotus-contact' component={PageLotusContact} />
      <Route path='/lotus-faq' component={PageLotusFAQ} />
    </Switch>
  )
}

export default LotusRouter

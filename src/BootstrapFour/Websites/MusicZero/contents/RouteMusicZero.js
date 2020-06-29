import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Page from './Page';
import Aboutus from './aboutus/Aboutus';
import Contact from './contact/Contact';
import MusicCardDetail from './musicCards/MusicCardDetail';


function RouteMusicZero() {

  return (
    <Switch>
      <Route exact path="/music-zero" component={Page} />
      <Route path='/music-zero-about' component={Aboutus} />
      <Route path="/music-zero-contact" component={Contact} />
      <Route path="/music-zero-detail" component={MusicCardDetail} />
    </Switch>
  )
}

export default RouteMusicZero

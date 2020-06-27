import React from 'react'
import { Switch, Route } from 'react-router-dom';
import Page from './Page';
import Aboutus from './Aboutus';
import Contact from './Contact';


function RouteMusicZero() {
  return (
    <Switch>
      <Route exact path="/music-zero" component={Page} />
      <Route path='/music-zero-about' component={Aboutus} />
      <Route path="/music-zero-contact" component={Contact} />
    </Switch>
  )
}

export default RouteMusicZero

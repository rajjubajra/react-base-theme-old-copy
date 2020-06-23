import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Page from './Page';




const RouterPortfolio2020 = () => {
  return (
    /** DO NOT DEFINE css div classs and component in this page
    *  IT EFFECTS IN ALL THE other components 
    *  This page is only for Switch / Route 
   */
    <Switch>
      <Route exact path="/portfolio2020" component={Page} />
    </Switch>
  )
}

export default RouterPortfolio2020

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import PageCoffeeLanding from './Page/PageCoffeeLanding';
import PageCoffeeMenu from './Page/PageCoffeeMenu';


const RouteCoffee = () => {
  return (
    /** DO NOT DEFINE css div classs and component in this page
    *  IT EFFECTS IN ALL THE other components 
    *  This page is only for Switch / Route 
   */

    <Switch>
      <Route path="/coffee" component={PageCoffeeLanding} />
      <Route path="/food-menu" component={PageCoffeeMenu} />
    </Switch>

  )
}

export default RouteCoffee

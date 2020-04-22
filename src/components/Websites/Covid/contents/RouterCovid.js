import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ListByCountry from './ListByCountry';
import GeoChart from './GeoChart';
import DayOneTotal from './DayOneTotal';
import CountryStatus from './CountryStatus';

const RouterCovid = () => {

  return (
    <Switch>
      <Route path="/covid" component={ListByCountry} />
      <Route path="/geocharts" component={GeoChart} />
      <Route path="/dayonetotal" component={DayOneTotal} />
      <Route path="/countrystatus" component={CountryStatus} />
    </Switch>
  )
}

export default RouterCovid

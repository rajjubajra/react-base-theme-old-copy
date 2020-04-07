import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { actionSummary } from '../action/actionSummary';
import ListByCountry from './ListByCountry';
import GeoChart from './GeoChart';
import DayOneTotal from './DayOneTotal';

const RouterCovid = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionSummary());
  }, [dispatch])

  return (
    <Switch>
      <Route path="/covid" component={ListByCountry} />
      <Route path="/geocharts" component={GeoChart} />
      <Route path="/dayonetotal" component={DayOneTotal} />
    </Switch>
  )
}

export default RouterCovid

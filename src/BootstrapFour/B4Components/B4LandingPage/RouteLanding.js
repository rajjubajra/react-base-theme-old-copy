import React from 'react'
import { Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import SpecialOffer from './SpecialOffer/SpecialOffer';


function RouteLanding() {
  return (
    <>
      <Route path="/b4-landing-page">
        <LandingPage />
      </Route>
      <Route path="/special-offer">
        <SpecialOffer />
      </Route>
    </>
  )
}

export default RouteLanding

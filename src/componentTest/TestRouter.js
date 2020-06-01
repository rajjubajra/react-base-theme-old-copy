import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import TestPageOne from './TestPageOne';
import TestPageTwo from './TestPageTwo';

function TestRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={() => (<div>Home page</div>)} />
        <Route path="/testOne"><TestPageOne /></Route>
        <Route path="/testTwo"><TestPageTwo /></Route>
      </Switch>

      <Switch>
        <Route exact path="/one" component={() => (<div><h1>One</h1></div>)} />
        <Route exact path="/two" component={() => (<div><h1>Two</h1></div>)} />
        <Route exact path="/three" component={() => (<div><h1>Three</h1></div>)} />
      </Switch>
    </BrowserRouter>
  )
}

export default TestRouter

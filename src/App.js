import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Navbar from './components/navbar/Navbar';
import Categories from './components/Navigation/Categories';
import Boxes from './components/Boxes/Boxes';
import Navigation from './components/Navigation/Navigation';
import CallToAction from './components/CallToAction/CallToAction';
import Animation from './components/Animation/Animation';
import Contact from './components/Contact.js/Contact';
import Headers from './components/Headers/Headers';




function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <div className="main">
            <Categories />
            <Switch>
              <Route path="/boxes">
                  <Boxes />
              </Route>
              <Route path="/navigation">
                  <Navigation /> 
              </Route>
              <Route path="/calltoaction" >
                  <CallToAction />
              </Route>
              <Route path="/animation" >
                  <Animation />
              </Route>
              <Route path="/contact" >
                  <Contact />
              </Route>
              <Route path="/headers" >
                  <Headers />
              </Route>
            </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;

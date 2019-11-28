import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Navbar from './components/navbar/Navbar';
import Categories from './components/Navigation/Categories';
import Boxes from './components/Boxes/Boxes';
import Navigation from './components/Navigation/Navigation';




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
            </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;

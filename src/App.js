import React from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Navbar from './components/navbar/Navbar';
import Categories from './components/navbar/Categories';
import B4Members from './components/Boxes/B4Members';
import B3images from './components/Boxes/B3images';



function App() {
  return (
    <BrowserRouter>
        <div className="App">
          <div className="main">
            <Categories />
            <Switch>
              <Route path="/boxes">
                <B4Members />
                <B3images />
              </Route>
            </Switch>
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;

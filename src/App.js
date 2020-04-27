import React from 'react';
import './App.scss';
import Router from './router/Router';
import ComingSoon from './components/Websites/ComingSoon/ComingSoon';
import { BrowserRouter, Route } from 'react-router-dom';
import Websites from './components/Websites/Websites';


function App() {
  return (

    <div className="App">
      {/* <Router /> */}
      <BrowserRouter>
        <Route exact path="/" ><ComingSoon /></Route>
        <Route path="/websites"><Websites /></Route>
      </BrowserRouter>

    </div>

  );
}
export default App;

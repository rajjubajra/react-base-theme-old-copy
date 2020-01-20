import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import Navbar from './components/navbar/Navbar';
//import Categories from './components/Navigation/Categories';
import Boxes from './components/Boxes/Boxes';
import Navigation from './components/Navigation/Navigation';
import CallToAction from './components/CallToAction/CallToAction';
import Animation from './components/Animation/Animation';
import Contact from './components/Contact.js/Contact';
import Headers from './components/Headers/Headers';
import Websites from './components/Websites/Websites';
import MeghaMenu from './components/Navigation/MeghaMenu';
import Lotus from './components/Websites/Lotus/Lotus';
import Footers from './components/Footers/Footers';
import Columns from './components/Columns/Columns';
import Aboutus from './components/Aboutus/Aboutus';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Homepage from './components/HomePage/Homepage';
import Wheat from './components/Websites/Wheat/Wheat';



function App() {

  const [btnShowHide, setBtnShowHide] = useState(true);


  return (
    <BrowserRouter>
      <div className="App">
        {/* <div
          style={{

            width: "100%",
            height: "30px",
            background: "#000",
            textAlign: "center",
            display: `${btnShowHide ? 'block' : 'none'}`
          }}>

          <button
            style={{
              border: '0px',
              background: '#000',
              color: "#fff",
              outline: "0px",
              cursor: "pointer",

            }}
            onClick={() => setBtnShowHide(!btnShowHide)}>
            {btnShowHide ? 'Hide Menu' : 'Show Menu'}
          </button>
        </div> */}

        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          {/* <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div> */}
          <Switch>
            <Route exact path="/">
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Websites />
            </Route>

            <Route path="/websites">
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Websites />
            </Route>
            <Route path="/boxes">
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Boxes />
            </Route>
            <Route path="/homepage">
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Homepage />
            </Route>
            <Route path="/aboutus">
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Aboutus />
            </Route>
            <Route path="/columns">
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Columns />
            </Route>
            <Route path="/navigation">
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Navigation />
            </Route>
            <Route path="/calltoaction" >
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <CallToAction />
            </Route>
            <Route path="/animation" >
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Animation />
            </Route>
            <Route path="/imageslider" >
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <ImageSlider />
            </Route>
            <Route path="/contact" >
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Contact />
            </Route>
            <Route path="/headers" >
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Headers />
            </Route>
            <Route path="/footers">
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Footers />
            </Route>
            <Route path="/lotus" >
              <Lotus />
            </Route>
            <Route path="/wheat" >
              <Wheat />
            </Route>

          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

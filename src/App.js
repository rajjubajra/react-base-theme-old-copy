import React, { useState } from 'react';
import './App.scss';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Boxes from './components/Boxes/Boxes';
import Aboutus from './components/Aboutus/Aboutus';
import Navigation from './components/Navigation/Navigation';
import CallToAction from './components/CallToAction/CallToAction';
import Animation from './components/Animation/Animation';
import Contact from './components/Contact/Contact';
import Headers from './components/Headers/Headers';
import Websites from './components/Websites/Websites';
import Apps from './components/Apps/Apps';
import MeghaMenu from './components/Navigation/MeghaMenu';
import Lotus from './components/Websites/Lotus/Lotus';
import Footers from './components/Footers/Footers';
import Columns from './components/Columns/Columns';
import ImageSlider from './components/ImageSlider/ImageSlider';
import Homepage from './components/HomePage/Homepage';
import Wheat from './components/Websites/Wheat/Wheat';
import PageLotusAbout from './components/Websites/Lotus/PageLotusAbout';
import PageLotusWhatWeDo from './components/Websites/Lotus/PageLotusWhatWeDo';
import PageLotusContact from './components/Websites/Lotus/PageLotusContact';
import PageLotusFAQ from './components/Websites/Lotus/PageLotusFAQ';
import PageWheatAbout from './components/Websites/Wheat/PageWheatAbout';
import PageWheatService from './components/Websites/Wheat/PageWheatService';
import PageWheatTeam from './components/Websites/Wheat/PageWheatTeam';
import PageWheatContact from './components/Websites/Wheat/PageWheatContact';
import LanPasaa from './components/Websites/LanPasaa/LanPasaa';
import PageLanPasaaShop from './components/Websites/LanPasaa/PageLanPasaaShop';
import PageLanPasaaAbout from './components/Websites/LanPasaa/PageLanPasaaAbout';
import PageLanPasaaContact from './components/Websites/LanPasaa/PageLanPasaaContact';
import ReduxCounter from './components/Apps/ReduxCounter/ReduxCounter';
//import ReduxAppTodo from './components/Apps/ReduxAppTodo/ReduxAppTodo.js';



function App() {

  const [btnShowHide] = useState(true);


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



        <Switch>
          <Route exact path="/">
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Websites />
            </div>
          </Route>

          <Route path="/websites">
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Websites />
            </div>
          </Route>
          <Route path="/apps">
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Apps />
            </div>
          </Route>
          <Route path="/boxes">
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Boxes />
            </div>
          </Route>
          <Route path="/homepage">
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Homepage />
            </div>
          </Route>
          <Route path="/aboutus">
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Aboutus />
            </div>
          </Route>
          <Route path="/columns">
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Columns />
            </div>
          </Route>
          <Route path="/navigation">
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Navigation />
            </div>
          </Route>
          <Route path="/calltoaction" >
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <CallToAction />
            </div>
          </Route>
          <Route path="/animation" >
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Animation />
            </div>
          </Route>
          <Route path="/imageslider" >
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <ImageSlider />
            </div>
          </Route>
          <Route path="/contact" >
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Contact />
            </div>
          </Route>
          <Route path="/headers" >
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Headers />
            </div>
          </Route>
          <Route path="/footers">
            <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
              <div className={btnShowHide ? 'show' : 'hide'}>
                <MeghaMenu />
              </div>
              <Footers />
            </div>
          </Route>


          {/** REACT APPS */}
          <Route path="/apps-Redux-Counter" component={ReduxCounter} />
          {/* <Route path="/apps-Redux-Todo" component={ReduxAppTodo} /> */}



          {/**  WEBSITE TEMPLATE   */}
          {/** LOTUS */}
          <Route path="/lotus" component={Lotus} />
          <Route path="/lotus-About-us" component={PageLotusAbout} />
          <Route path='/lotus-What-we-do' component={PageLotusWhatWeDo} />
          <Route path='/lotus-contact' component={PageLotusContact} />
          <Route path='/lotus-faq' component={PageLotusFAQ} />




          {/** WHEAT */}
          <Route path="/wheat" component={Wheat} />
          <Route path="/wheat-aboutus" component={PageWheatAbout} />
          <Route path="/wheat-services" component={PageWheatService} />
          <Route path="/wheat-ourteam" component={PageWheatTeam} />
          <Route path="/wheat-contact" component={PageWheatContact} />

          {/** LAN PASAA */}
          <Route path="/lanpasaa" component={LanPasaa} />
          <Route path="/lanpasaa-shop" component={PageLanPasaaShop} />
          <Route path="/lanpasaa-about" component={PageLanPasaaAbout} />
          <Route path="/lanpasaa-contact" component={PageLanPasaaContact} />


        </Switch>
      </div>
    </BrowserRouter >
  );
}

export default App;

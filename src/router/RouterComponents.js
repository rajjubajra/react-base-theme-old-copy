import React, { useState } from 'react'
import { Route } from 'react-router-dom';
import Boxes from '../components/Boxes/Boxes';
import Aboutus from '../components/Aboutus/Aboutus';
import Navigation from '../components/Navigation/Navigation';
import CallToAction from '../components/CallToAction/CallToAction';
import Animation from '../components/Animation/Animation';
import Contact from '../components/Contact/Contact';
import Headers from '../components/Headers/Headers';
import Apps from '../components/Apps/Apps';
import MeghaMenu from '../components/Navigation/MeghaMenu';
import Footers from '../components/Footers/Footers';
import SocialMedia from '../components/SocialMedia/SocialMeida';
import Columns from '../components/Columns/Columns';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Homepage from '../components/HomePage/Homepage';
import LiveStream from '../components/LiveStream/LiveStream';
import EmbedIframe from '../components/EmbedIframe/EmbedIframe';
import Carousel from '../components/Carousel/Carousel';
import Hooks from '../components/Hooks/Hooks';



const RouterComponents = () => {

  const [btnShowHide] = useState(true);

  return (

    <div className="App">
      {/** css class 'App' is globale class for custom-made css style */}


      {/** COLUMNS *************************************/}
      <Route path="/columns">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Columns />
        </div>
      </Route>

      {/** LIVE STREAM PAGE *************************************/}
      <Route path="/live-stream" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <LiveStream />
        </div>
      </Route>

      {/** APPS PAGE *************************************/}
      <Route path="/apps">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Apps />
        </div>
      </Route>

      {/** BOXES PAGE *************************************/}
      <Route path="/boxes">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Boxes />
        </div>
      </Route>

      {/** HOMEPAGE PAGES *************************************/}
      <Route path="/homepage">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Homepage />
        </div>
      </Route>

      {/** ABOUT US PAGES *************************************/}
      <Route path="/aboutus">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Aboutus />
        </div>
      </Route>

      {/** NAVIGATIONS *************************************/}
      <Route path="/navigation">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Navigation />
        </div>
      </Route>

      {/** CALL TO ACTIONS *************************************/}
      <Route path="/calltoaction" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <CallToAction />
        </div>
      </Route>

      {/** ANIMATIONS *************************************/}
      <Route path="/animation" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Animation />
        </div>
      </Route>

      {/** IMAGE SLIDERS *************************************/}
      <Route path="/imageslider" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <ImageSlider />
        </div>
      </Route>

      {/** CONTACT PAGES *************************************/}
      <Route path="/contact" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Contact />
        </div>
      </Route>

      {/** HEADERS *************************************/}
      <Route path="/headers" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Headers />
        </div>
      </Route>

      {/** FOOTERS *************************************/}
      <Route path="/footers">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Footers />
        </div>
      </Route>

      {/** SOCIAL MEDIAS *************************************/}
      <Route path="/social-media">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <SocialMedia />
        </div>
      </Route>

      {/** IFRAME *************************************/}
      <Route path="/iframe">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <EmbedIframe />
        </div>
      </Route>

      {/** Carousel *************************************/}
      <Route path="/carousel">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Carousel />
        </div>
      </Route>

      {/** UseHooks [code reference]  *************************************/}
      <Route path="/hooks">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Hooks />
        </div>
      </Route>



    </div>
  )
}

export default RouterComponents

import React, { useState } from 'react'
import { Switch, Route } from 'react-router-dom';
import Boxes from '../components/Boxes/Boxes';
import Aboutus from '../components/Aboutus/Aboutus';
import Navigation from '../components/Navigation/Navigation';
import CallToAction from '../components/CallToAction/CallToAction';
import Animation from '../components/Animation/Animation';
import Contact from '../components/Contact/Contact';
import Headers from '../components/Headers/Headers';
import Websites from '../components/Websites/Websites';
import Apps from '../components/Apps/Apps';
import MeghaMenu from '../components/Navigation/MeghaMenu';
import Footers from '../components/Footers/Footers';
import SocialMedia from '../components/SocialMedia/SocialMeida';
import Columns from '../components/Columns/Columns';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import Homepage from '../components/HomePage/Homepage';
import ComingSoon from '../components/Websites/ComingSoon/ComingSoon';
import LiveStream from '../components/LiveStream/LiveStream';


const RouterReUseComponents = () => {



  const [btnShowHide] = useState(true);

  return (

    <Switch>
      <Route exact path='/' >
        <ComingSoon />
      </Route>
      <Route path="/websites" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Websites />
        </div>
      </Route>
      <Route path="/live-stream" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <LiveStream />
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
      <Route path="/social-media">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
            <SocialMedia />
          </div>
        </div>
      </Route>
    </Switch>
  )
}

export default RouterReUseComponents

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
import WebsitesBootstrap from '../components/WebsitesBootstrap/WebsitesBootstrap';
import Portfolio2020 from '../components/WebsitesBootstrap/Bootstrap_4/Portfolio2020/Portfolio2020';


const RouterReUseComponents = () => {



  const [btnShowHide] = useState(true);

  return (

    <Switch>
      {/** LANDING PAGE *************************************/}
      <Route exact path='/' >
        <div className={btnShowHide ? 'show' : 'hide'}>
          <MeghaMenu />
        </div>
        <ComingSoon />
      </Route>
      {/** WEBSITES PAGE *************************************/}
      <Route path="/websites" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Websites />
        </div>
      </Route>
      {/** WEBSITES-BOOTSTRAP PAGE *************************************/}
      <Route path="/websites-bootstrap" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <WebsitesBootstrap />
        </div>
      </Route>

      <Route path="/Websites-bootstrap/Project2020" >
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <Portfolio2020 />
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
      {/** COLUMNS *************************************/}
      <Route path="/columns">
        <div className={btnShowHide ? 'with-menu' : 'without-menu'}>
          <div className={btnShowHide ? 'show' : 'hide'}>
            <MeghaMenu />
          </div>
          <Columns />
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
            <SocialMedia />
          </div>
        </div>
      </Route>

    </Switch>
  )
}

export default RouterReUseComponents

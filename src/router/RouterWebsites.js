import React from 'react'
import Wheat from '../components/Websites/Wheat/Wheat';
import Lotus from '../components/Websites/Lotus/Lotus';
import PageLotusAbout from '../components/Websites/Lotus/PageLotusAbout';
import PageLotusWhatWeDo from '../components/Websites/Lotus/PageLotusWhatWeDo';
import PageLotusContact from '../components/Websites/Lotus/PageLotusContact';
import PageLotusFAQ from '../components/Websites/Lotus/PageLotusFAQ';
import PageWheatAbout from '../components/Websites/Wheat/PageWheatAbout';
import PageWheatService from '../components/Websites/Wheat/PageWheatService';
import PageWheatTeam from '../components/Websites/Wheat/PageWheatTeam';
import PageWheatContact from '../components/Websites/Wheat/PageWheatContact';
import LanPasaa from '../components/Websites/LanPasaa/LanPasaa';
import PageLanPasaaShop from '../components/Websites/LanPasaa/PageLanPasaaShop';
import PageLanPasaaAbout from '../components/Websites/LanPasaa/PageLanPasaaAbout';
import PageLanPasaaContact from '../components/Websites/LanPasaa/PageLanPasaaContact';
import { Switch, Route } from 'react-router-dom';

const RouterWebsites = () => {
  return (
    <Switch>
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
  )
}

export default RouterWebsites

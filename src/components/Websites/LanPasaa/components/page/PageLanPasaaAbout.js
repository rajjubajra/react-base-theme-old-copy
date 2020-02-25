import React from 'react';
import LanPasaaAboutus from './About/LanPasaaAboutus';
import LanPasaaTitle from '../header/LanPasaaTitle';
import NavMainLanPasaa from '../nav/NavMainLanPasaa';
import SubscrptionLanPasaa from './About/SubscriptionLanPasaa';



const PageLanPasaaAbout = () => {

  return (
    <div className="lanpasaa">
      <LanPasaaTitle />
      <NavMainLanPasaa />
      <LanPasaaAboutus />
      <SubscrptionLanPasaa />
    </div>
  )
}

export default PageLanPasaaAbout

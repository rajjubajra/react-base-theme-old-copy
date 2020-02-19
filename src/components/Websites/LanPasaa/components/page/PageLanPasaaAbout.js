import React from 'react';
import LanPasaaTitle from '../header/LanPasaaTitle';
import NavMainLanPasaa from '../nav/NavMainLanPasaa';
import LanPasaaAboutus from './LanPasaaAboutus';
import SubscriptionLanPasaa from './SubscriptionLanPasaa';


const PageLanPasaaAbout = () => {

  return (
    <>
      <div className="lanpasaa">
        <LanPasaaTitle />
        <div>
          <NavMainLanPasaa />
          <LanPasaaAboutus />
          <SubscriptionLanPasaa />

        </div>
      </div>
    </>
  )
}

export default PageLanPasaaAbout

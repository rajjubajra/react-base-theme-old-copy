import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavMainLanPasaa from './NavMainLanPasaa';
import LanPasaaTitle from './LanPasaaTitle';
import PageLanPasaaShop from './PageLanPasaaShop';
import PageLanPasaaAbout from './PageLanPasaaAbout';
import PageLanPasaaContact from './PageLanPasaaContact';
import CopyRightFooter from '../../Lotus/CopyRightFooter';




const LanPasaa = (params) => {

  const [localRouter, setLocalRouter] = useState('lanpasaa');

  const pasaaTitle = useSelector(state => state.pasaaInfoReducer.name);
  console.log("pass Title", pasaaTitle, "path", localRouter);



  switch (localRouter) {
    case 'lanpasaa':
      return (
        <div className="lanpasaa" >
          <div className="landing-page">
            <LanPasaaTitle title={pasaaTitle} />
            <NavMainLanPasaa setPath={setLocalRouter} />
          </div>
          <CopyRightFooter />
        </div>
      )
    case 'lanpasaa-shop':
      return (
        <PageLanPasaaShop title={pasaaTitle} />
      )
    case 'lanpasaa-about':
      return (
        <PageLanPasaaAbout title={pasaaTitle} />
      )
    case 'lanpasaa-contact':
      return (
        <PageLanPasaaContact title={pasaaTitle} />
      )

    default:
      return (
        <div className="lanpasaa" >
          <div className="landing-page">
            <LanPasaaTitle title={pasaaTitle} />
            <NavMainLanPasaa setPath={setLocalRouter} />
          </div>
          <CopyRightFooter />
        </div>
      )
  }



}

export default LanPasaa

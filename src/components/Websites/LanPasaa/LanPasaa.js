import React from 'react';
import { useSelector } from 'react-redux';
import NavMainLanPasaa from './NavMainLanPasaa';
import LanPasaaTitle from './LanPasaaTitle';
import CopyRightFooter from '../Lotus/CopyRightFooter';


const LanPasaa = () => {

  const storeName = useSelector(state => state.storeName);

  return (
    <div className="lanpasaa">
      <div className="landing-page">
        <LanPasaaTitle title={storeName} />
        <NavMainLanPasaa />
      </div>
      <CopyRightFooter />
    </div>
  )
}

export default LanPasaa

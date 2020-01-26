import React from 'react';
import { useSelector } from 'react-redux';
import NavMainLanPasaa from './NavMainLanPasaa';
import LanPasaaTitle from './LanPasaaTitle';


const LanPasaa = () => {

  const storeName = useSelector(state => state.storeName);

  return (
    <div className="lanpasaa">
      <div className="landing-page">
        <LanPasaaTitle title={storeName} />
        <NavMainLanPasaa />
      </div>
    </div>
  )
}

export default LanPasaa

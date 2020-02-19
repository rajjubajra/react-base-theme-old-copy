import React from 'react';
import NavMainLanPasaa from './nav/NavMainLanPasaa';
import LanPasaaTitle from './header/LanPasaaTitle';


const LanPasaa = () => {
  return (
    <div className="lanpasaa" >
      <div className="landing-page">
        <LanPasaaTitle />
        <NavMainLanPasaa />
      </div>
    </div>
  )
}
export default LanPasaa

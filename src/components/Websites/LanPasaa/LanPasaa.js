import React, { useState } from 'react';
import NavMainLanPasaa from './NavMainLanPasaa';
import LanPasaaTitle from './LanPasaaTitle';


const LanPasaa = () => {
  const [shopName] = useState('Lan Pasaa');
  return (
    <div className="lanpasaa">
      <div className="landing-page">
        <LanPasaaTitle title={shopName} />
        <NavMainLanPasaa />
      </div>
    </div>
  )
}

export default LanPasaa

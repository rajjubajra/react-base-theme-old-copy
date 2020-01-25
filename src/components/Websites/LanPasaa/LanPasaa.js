import React, { useState } from 'react';
import NavMainLanPasaa from './NavMainLanPasaa';
import LanPasaaTitle from './LanPasaaTitle';


const LanPasaa = () => {
  const [shopName] = useState('Lan Pasaa');
  return (
    <div className="lanpasaa">
      <LanPasaaTitle title={shopName} />
      <NavMainLanPasaa />
    </div>
  )
}

export default LanPasaa

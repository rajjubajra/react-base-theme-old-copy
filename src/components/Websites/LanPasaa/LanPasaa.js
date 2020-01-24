import React, { useState } from 'react';
import NavMainLanPasaa from './NavMainLanPasaa';


const LanPasaa = () => {
  const [shopName] = useState('Lan Pasaa');
  return (
    <div className="lanpasaa">
      <h1 className="store-name">{shopName}</h1>
      <NavMainLanPasaa />
    </div>
  )
}

export default LanPasaa

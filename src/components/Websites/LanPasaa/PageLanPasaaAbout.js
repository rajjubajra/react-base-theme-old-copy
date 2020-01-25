import React, { useState } from 'react';
import LanPasaaTitle from './LanPasaaTitle';
import NavMainLanPasaa from './NavMainLanPasaa';


const PageLanPasaaAbout = () => {
  const [storeName] = useState('Lan Pasaa');

  return (
    <div className="lanpasaa">
      <div className="about">
        <LanPasaaTitle title={storeName} />
        <NavMainLanPasaa />
      </div>

    </div>
  )
}

export default PageLanPasaaAbout

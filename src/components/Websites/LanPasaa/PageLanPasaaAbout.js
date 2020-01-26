import React, { useState } from 'react';
import LanPasaaTitle from './LanPasaaTitle';
import NavMainLanPasaa from './NavMainLanPasaa';


const PageLanPasaaAbout = () => {
  const [storeName] = useState('Lan Pasaa');

  return (
    <div className="lanpasaa">
      <div className="about">
        <LanPasaaTitle title={storeName} />
        <div className="page-title">
          <NavMainLanPasaa />
          <h1>About us</h1>
        </div>

      </div>

    </div>
  )
}

export default PageLanPasaaAbout

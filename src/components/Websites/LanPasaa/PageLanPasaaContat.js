import React, { useState } from 'react'
import LanPasaaTitle from './LanPasaaTitle'
import NavMainLanPasaa from './NavMainLanPasaa';

const PageLanPasaaContat = () => {
  const [storeName] = useState('Lan Pasaa');
  return (
    <div className="lanpasaa">
      <div className="contact">
        <LanPasaaTitle title={storeName} />
        <div className="page-title">
          <NavMainLanPasaa />
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  )
}

export default PageLanPasaaContat

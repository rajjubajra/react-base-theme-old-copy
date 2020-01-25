import React, { useState } from 'react'
import LanPasaaTitle from './LanPasaaTitle'
import NavMainLanPasaa from './NavMainLanPasaa';

const PageLanPasaaContat = () => {
  const [storeName] = useState('Lan Pasaa');
  return (
    <div className="lanpasaa">
      <LanPasaaTitle title={storeName} />
      <NavMainLanPasaa />


    </div>
  )
}

export default PageLanPasaaContat

import React, { useState } from 'react'
import LanPasaaTitle from './LanPasaaTitle'
import NavShopLanPasaa from './NavShopLanPasaa'
import Pasaa from './Pasaa';

const PageLanPasaaShop = () => {
  const [storeName] = useState('Lan Pasaa');
  return (
    <div className="pagelanpasaashop">
      <LanPasaaTitle title={storeName} />
      <NavShopLanPasaa />
      <div className="divider"></div>
      <Pasaa />


    </div>
  )
}

export default PageLanPasaaShop
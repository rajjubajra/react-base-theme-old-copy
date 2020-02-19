import React from 'react';
import LanPasaaTitle from '../header/LanPasaaTitle'
import NavShopLanPasaa from '../nav/NavShopLanPasaa'
import Pasaa from '../Pasaa';

const PageLanPasaaShop = (props, params) => {




  return (
    <div className="pagelanpasaashop">
      <LanPasaaTitle />
      <NavShopLanPasaa />
      <div className="divider"></div>
      <Pasaa />
    </div>
  )
}

export default PageLanPasaaShop

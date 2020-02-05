import React from 'react';
import LanPasaaTitle from './LanPasaaTitle'
import NavShopLanPasaa from './NavShopLanPasaa'
import Pasaa from './Pasaa';

const PageLanPasaaShop = (props) => {


  return (
    <div className="pagelanpasaashop">
      <LanPasaaTitle title={props.title} />
      <NavShopLanPasaa />
      <div className="divider"></div>
      <Pasaa />
    </div>
  )
}

export default PageLanPasaaShop

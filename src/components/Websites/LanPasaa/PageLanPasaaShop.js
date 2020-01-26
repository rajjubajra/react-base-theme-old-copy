import React from 'react'
import { useSelector } from 'react-redux';
import LanPasaaTitle from './LanPasaaTitle'
import NavShopLanPasaa from './NavShopLanPasaa'
import Pasaa from './Pasaa';

const PageLanPasaaShop = () => {

  const storeName = useSelector(state => state.storeName);
  //console.log('LAN PASAA NAME ', nameOfStore);


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

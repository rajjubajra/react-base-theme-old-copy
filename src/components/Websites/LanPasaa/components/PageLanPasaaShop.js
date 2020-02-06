import React, { useState } from 'react';
import LanPasaaTitle from './LanPasaaTitle'
import NavShopLanPasaa from './NavShopLanPasaa'
import Pasaa from './Pasaa';

const PageLanPasaaShop = (props, params) => {
  const [navHome, setNavHome] = useState('')
  console.log('Page Shop', navHome)


  return (
    <div className="pagelanpasaashop">
      <LanPasaaTitle title={props.title} />
      <NavShopLanPasaa setPath={setNavHome} />
      <div className="divider"></div>
      <Pasaa />
    </div>
  )
}

export default PageLanPasaaShop

import React from 'react';
import { Link } from 'react-router-dom';
import LanPasaaTitle from '../header/LanPasaaTitle';
import CartDetails from './Shop/CartDetails';
import NavMainLanPasaa from '../nav/NavMainLanPasaa';

export const PageCart = () => {
  return (
    <div className="lanpasaa">
      <LanPasaaTitle />
      <NavMainLanPasaa />
      <div className="divider"></div>
      <Link to='/lanpasaa-shop' className="btn-cart-close" alt="Close"> X </Link>
      <CartDetails />
    </div>
  )
}
export default PageCart;

import React from 'react'
import LanPasaaTitle from '../header/LanPasaaTitle';
import CartDetails from './Shop/CartDetails';
import NavMainLanPasaa from '../nav/NavMainLanPasaa';

export const PageCart = () => {
  return (
    <div className="lanpasaa">
      <LanPasaaTitle />
      <NavMainLanPasaa />
      <div className="divider"></div>
      <div className="shopping-cart">
        <section className="product">
          <CartDetails />
        </section>
      </div>

    </div>
  )
}
export default PageCart;

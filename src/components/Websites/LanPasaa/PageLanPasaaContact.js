import React from 'react';
import { useSelector } from 'react-redux';
import LanPasaaTitle from './LanPasaaTitle';
import NavMainLanPasaa from './NavMainLanPasaa';

const PageLanPasaaContact = () => {

  const storeName = useSelector(state => state.storeName);

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

export default PageLanPasaaContact

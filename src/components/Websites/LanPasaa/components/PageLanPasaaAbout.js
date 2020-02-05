import React from 'react';
import { useSelector } from 'react-redux';
import LanPasaaTitle from './LanPasaaTitle';
import NavMainLanPasaa from './NavMainLanPasaa';


const PageLanPasaaAbout = (props) => {

  const storeName = useSelector(state => state.storeName);

  return (
    <div className="lanpasaa">
      <div className="about">
        <LanPasaaTitle title={props.title} />
        <div className="page-title">
          <NavMainLanPasaa />
          <h1>About us</h1>
        </div>

      </div>

    </div>
  )
}

export default PageLanPasaaAbout

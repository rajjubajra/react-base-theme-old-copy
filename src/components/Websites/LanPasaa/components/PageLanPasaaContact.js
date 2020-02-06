import React from 'react';
import LanPasaaTitle from './LanPasaaTitle';
import NavMainLanPasaa from './NavMainLanPasaa';

const PageLanPasaaContact = (props) => {

  return (
    <div className="lanpasaa">
      <div className="contact">
        <LanPasaaTitle title={props.title} />
        <div className="page-title">
          <NavMainLanPasaa />
          <h1>Contact</h1>
        </div>
      </div>
    </div>
  )
}

export default PageLanPasaaContact

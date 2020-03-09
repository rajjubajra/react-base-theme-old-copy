import React from 'react';
import NavLotus from './NavLotus';
import HeroLotus from './HeroLotus';
import B3Lotus from './B3Lotus';
import TwoColumnsLotus1 from './TwoColumnsLotus1';
import TwoColumnsLotus2 from './TwoColumnsLotus2';
import TwoColumnContact from './TwoColumnContact';

const Lotus = () => {
  return (
    <>
      <div className="lotus">
        <div className="lotus-nav">
          <NavLotus />
        </div>
        <div className="lotus-body">
          <HeroLotus />
          <B3Lotus />
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="divider"></div>
          <TwoColumnsLotus1 />
          <TwoColumnsLotus2 />
          <div className="divider"></div>
          <div className="divider"></div>
          <div className="divider"></div>
          <TwoColumnContact />
          <div className="divider"></div>
        </div>
      </div>
    </>
  )
}

export default Lotus

import React from 'react';
import NavLotus from './NavLotus';
import HeroLotus from './HeroLotus';
import B3Lotus from './B3Lotus';
import TwoColumns from './TwoColumns';
import TwoColumnLotus from './TwoColumnLotus';
import CopyRightFooter from './CopyRightFooter';
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
          <TwoColumns />
          <TwoColumnLotus />
          <div className="divider"></div>
          <TwoColumnContact />
          <div className="divider"></div>
        </div>
      </div>
      <CopyRightFooter />
    </>
  )
}

export default Lotus

import React from 'react';
import NavLotus from './NavLotus';
import HeroLotus from './HeroLotus';
import B3Lotus from './B3Lotus';
import TwoColumns from './TwoColumns';
import TwoColumnLotus from './TwoColumnLotus';
import LotusContactPage from './LotusContactPage';
import CopyRightFooter from './CopyRightFooter';
import LotusAboutUs from './LotusAboutUs';
import LotusTeam from './LotusTeam';
import LotusWorks from './LotusWorks';
import LotusWhatWeDo from './LotusWhatWeDo';

const Lotus = () => {
  return (
    <div className="lotus">
      <NavLotus />
      <HeroLotus />
      <B3Lotus />
      <TwoColumns />
      <TwoColumnLotus />
      <div className="divider"></div>
      <LotusAboutUs />
      <LotusTeam />
      <div className="divider"></div>
      <LotusWhatWeDo />
      <div className="divider"></div>
      <LotusWorks />
      <div className="divider"></div>
      <LotusContactPage />
      <div className="divider"></div>
      <div className="divider"></div>
      <CopyRightFooter />
    </div>
  )
}

export default Lotus

import React, { useState } from 'react';
import NavFixedLeft from './NavFixedLeft';
import WheatAboutus from './WheatAboutus';
import HeroWheatTwo from './HeroWheatTwo';
import TeamWheat from './TeamWheat';
import SubscriptionWheat from './SubscriptionWheat';
import TitleWide from './TitleWide';


const PageWheatAbout = () => {
  const [btnClosed, setBtnClosed] = useState('');
  const [title] = useState('About us');
  const [backgroundImage] = useState('cake-44');

  const navToggle = () => {
    setBtnClosed(btnClosed === '' ? 'open' : '');
  }

  console.log(btnClosed);

  return (
    <>
      <div className={`wheat ${btnClosed}`}>

        <div className={`wheat-navbar ${btnClosed}`}>
          <NavFixedLeft navToggle={navToggle} btnClosed={btnClosed} />
        </div>
        <div className="wheat-body" >
          <TitleWide title={title} backgroundImage={backgroundImage} />
          <WheatAboutus />
          <div className="divider"></div>
          <TeamWheat />
          <div className="divider"></div>
          <HeroWheatTwo />
          <div className="divider"></div>
          <SubscriptionWheat />
          <div className="divider"></div>
          <div className="divider"></div>

        </div>
      </div>


    </>
  )
}

export default PageWheatAbout

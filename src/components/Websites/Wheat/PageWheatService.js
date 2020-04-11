import React, { useState } from 'react';
import NavFixedLeft from './NavFixedLeft';
import TitleWide from './TitleWide';
import ThreeColumnWheat from './ThreeColumnWheat';
import TwoColumnWheat from './TwoColumnWheat';
import SubscriptionWheat from './SubscriptionWheat';
import HeroWheatTwo from './HeroWheatTwo';

const PageWheatService = () => {
  const [btnClosed, setBtnClosed] = useState('');
  const [title] = useState('Services');
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
          <div className="divider"></div>
          <ThreeColumnWheat />
          <div className="divider"></div>
          <TwoColumnWheat />
          <div className="divider"></div>
          <HeroWheatTwo />
          <div className="divider"></div>
          <SubscriptionWheat />

        </div>
      </div>

    </>
  )
}

export default PageWheatService

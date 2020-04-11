import React, { useState } from 'react';
import NavFixedLeft from './NavFixedLeft';
import TitleWide from './TitleWide';
import TeamWheat from './TeamWheat';
import ContactWheat from './ContactWheat';
import SubscriptionWheat from './SubscriptionWheat';

const PageWheatTeam = () => {
  const [btnClosed, setBtnClosed] = useState('');
  const [title] = useState('Our Team');
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
          <div className="divider"></div>
          <TeamWheat />
          <div className="divider"></div>
          <ContactWheat />

          <div className="divider"></div>
          <SubscriptionWheat />
        </div>
      </div>


    </>
  )
}

export default PageWheatTeam

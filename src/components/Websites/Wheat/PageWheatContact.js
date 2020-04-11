import React, { useState } from 'react';
import NavFixedLeft from './NavFixedLeft';
import TitleWide from './TitleWide';
import ContactWheat from './ContactWheat';
import FormInBox from './FormInBox';

const PageWheatContact = () => {
  const [btnClosed, setBtnClosed] = useState('');
  const [title] = useState('Contact');
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
          <ContactWheat />
          <div className="divider"></div>
          <div className="divider"></div>
          <FormInBox />
          <div className="divider"></div>
          <div className="divider"></div>
        </div>
      </div>


    </>
  )
}

export default PageWheatContact

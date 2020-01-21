import React, { useState } from 'react'
import NavFixedLeft from './NavFixedLeft'
import HeroWheat from './HeroWheat'
import ThreeColumnWheat from './ThreeColumnWheat'
import TwoColumnWheat from './TwoColumnWheat'
//import HeroWheatTwo from './HeroWheatTwo';
import TeamWheat from './TeamWheat'
import TwoColPriceWheat from './TwoColPriceWheat'
import ContactWheat from './ContactWheat'
import CopyRightFooter from './CopyRightFooter'



const Wheat = () => {
  const [btnClosed, setBtnClosed] = useState('');

  const navToggle = () => {
    setBtnClosed(btnClosed === '' ? 'open' : '');
  }

  console.log(btnClosed);

  return (
    <>
      <div className={`wheat ${btnClosed}`}>

        <div className="wheat-navbar">
          <NavFixedLeft navToggle={navToggle} btnClosed={btnClosed} />
        </div>
        <div className="body" >

          <HeroWheat />
          <p></p>
          <p></p>
          <p></p>
          <ThreeColumnWheat />
          <TwoColumnWheat />
          <TeamWheat />
          <TwoColPriceWheat />
          <ContactWheat />
          <CopyRightFooter />




        </div>

      </div>
    </>
  )
}

export default Wheat

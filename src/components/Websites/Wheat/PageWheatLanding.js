import React, { useState } from 'react'
import NavFixedLeft from './NavFixedLeft'
import HeroWheat from './HeroWheat'
import ThreeColumnWheat from './ThreeColumnWheat'
import TwoColumnWheat from './TwoColumnWheat'
import ScrollOnClick from './ScrollOnClick'
import TwoColPriceWheat from './TwoColPriceWheat'


const PageWheatLanding = () => {
  const [btnClosed, setBtnClosed] = useState('');

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
          <HeroWheat />
          <div className="divider"></div>
          <ThreeColumnWheat />
          <div className="divider"></div>
          <TwoColPriceWheat />
          <div className="divider"></div>
          <div className="divider"></div>
          <TwoColumnWheat />
          <div className="divider"></div>
          <ScrollOnClick />
        </div>
      </div>
    </>
  )
}
export default PageWheatLanding;
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

        <div className="navbar-wheat">
          {/* <NavFixedLeft navToggle={navToggle} btnClosed={btnClosed} /> */}
        </div>
        <div className="body-wheat" >
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae quod maxime possimus! Architecto expedita cum numquam quos accusamus at itaque consequuntur commodi perferendis, porro omnis maxime provident soluta reiciendis obcaecati!</p>

          {/* 
          <HeroWheat />
          
          <div className="divider"></div>
          <ThreeColumnWheat />
          <div className="divider"></div>
          <TwoColumnWheat />
          <TeamWheat />
          <TwoColPriceWheat />
          <ContactWheat />
          <CopyRightFooter /> */}




        </div>

      </div>
    </>
  )
}

export default Wheat

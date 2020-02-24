import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import NavMainLanPasaa from '../nav/NavMainLanPasaa';
import LanPasaaTitle from '../header/LanPasaaTitle';


export default function PageLanPasaaLanding() {

  const titleAnimation = useSelector(state => state.reducerNavigation.titleAnimation);

  const [animation, setAnimation] = useState('false');


  useEffect(() => {
    titleAnimation === true ? setAnimation('dropdown-animation') : setAnimation('text-animation');
  }, [titleAnimation])


  return (
    <div className="lanpasaa">
      <div className="landing-page">
        <LanPasaaTitle animation={animation} />
        <NavMainLanPasaa />
      </div>
    </div>

  )
}

import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BtnThreelines from './BtnThreelines';

const Navbar = () => {

  const [btnclosed, setBtnClosed] = useState('');
  //console.log('btn', btnclosed);

  const navToggle = () => {
    setBtnClosed(btnclosed === '' ? 'open' : '');
  }


  return (
    <>
      <div className="navbar">
        <div className="row logo"><Link to="#" className="brand-logo">Logo</Link></div>
        <div className="row menu-icon">
          <BtnThreelines navToggle={navToggle} btnclosed={btnclosed} />
        </div>
        <div className={`row menu ${btnclosed}`}>
          <ul className="nav-ul inline">
            <li><Link to="#">Home</Link></li>
            <li><Link to="#">Aboutus</Link></li>
            <li><Link to="#">What we do</Link></li>
            <li><Link to="#">Contact</Link></li>
            <li><Link to="#">FAQ</Link></li>
          </ul>
        </div>
      </div>
    </>

  )
}

export default Navbar;

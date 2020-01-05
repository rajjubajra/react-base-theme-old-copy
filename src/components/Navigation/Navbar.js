import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import BtnThreelines from './BtnThreelines';

const Navbar = () => {

  const [btnclosed , setBtnClosed] = useState('');
  //console.log('btn', btnclosed);

  const navToggle = () => {
    setBtnClosed(btnclosed === '' ? 'open' : '' );
  }

  
  return (
    <>
    <div className="ref">Navbar.js</div>
    <div className="navbar">
      <div className="row logo"><Link to="#" className="brand-logo">Logo</Link></div>
      <div className="row menu-icon">
        <BtnThreelines navToggle={navToggle} btnclosed={btnclosed} />
      </div>
      <div className={`row menu ${btnclosed}`}>
        <ul className="nav-ul inline">
          <li><Link to="#">Home</Link></li>
          <li><Link to="#">CSS</Link></li>
          <li><Link to="#">Components</Link></li>
          <li><Link to="#">Navigation</Link></li>
          <li><Link to="#">Form</Link></li>   
        </ul>
      </div>
    </div>
  </>

)
}

export default Navbar;

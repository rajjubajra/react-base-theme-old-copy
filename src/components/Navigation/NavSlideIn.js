import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import BtnThreelines from './BtnThreelines';


const NavSlideIn = () => {
  const [btnclosed , setBtnClosed] = useState('');
  //console.log('btn', btnclosed);

  const navToggle = () => {
    setBtnClosed(btnclosed === '' ? 'open' : '' );
  }

  return (
    <>
    <div className="ref">NavSlideIn.js</div>
    <div className={`menu-icon ${btnclosed}`}>
      <BtnThreelines navToggle={navToggle} btnclosed={btnclosed} />
    </div>
    
    <nav className={`nav-slide-in ${btnclosed}`}>
      <ul className="nav-list">
        <small>nav-slidin</small>
        <li className="nav-item"><Link to="#">Home</Link></li>
        <li className="nav-item"><Link to="#">About</Link></li>
        <li className="nav-item"><Link to="#">Service</Link></li>
        <li className="nav-item"><Link to="#">Contact</Link></li>
        <li className="nav-item"><Link to="#">News</Link></li>
        <li className="nav-item"><Link to="#">Blog</Link></li>
      </ul>
    </nav>
    </>
  )
}

export default NavSlideIn;

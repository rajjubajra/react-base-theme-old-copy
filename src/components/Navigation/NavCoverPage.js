import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import BtnThreelines from './BtnThreelines';

const NavCoverPage = () => {

  const [btnclosed , setBtnClosed] = useState('');
  //console.log('btn', btnclosed);

  const navToggle = () => {
    setBtnClosed(btnclosed === '' ? 'open' : '' );
  }


  return (
    <>
    <div className="ref">NavCoverPage.js</div>
    <div className="btn-position">
      <BtnThreelines navToggle={navToggle} btnclosed={btnclosed} />
    </div>
    <nav className={`nav-cover-page ${btnclosed}`}>
      <ul className="nav-list">
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

export default NavCoverPage

import React from 'react'
import {Link} from 'react-router-dom';

const NavResponsive = () => {
  return (
    <>
    <div className="ref">NavResponsive.js</div>
    <div className="navbar">
      <Link to="/" className="brand-logo">Logo</Link>
      <button className="mobile-menu-icon">MM</button>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/">CSS</Link></li>
        <li><Link to="/">Components</Link></li>
        <li><Link to="/">Navigation</Link></li>
        <li><Link to="/">Form</Link></li>
      </ul>
    </div>
    </>
  )
}

export default NavResponsive

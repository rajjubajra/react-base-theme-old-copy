import React from 'react';
import {Link} from 'react-router-dom';

const EcomSearchBar = () => {
  return (
    <>
    <div className="ref">EcomSearchBar.js</div>
    <div className="ecom-search-bar">
      <div className="logo">Logo</div>
      <div className="search"><input type="text" name="search" value="" /></div>
      <div className="user">
        <ul>
          <li><Link to="#">Login</Link></li>
          <li><Link to="#">W</Link></li>
          <li><Link to="#">Bskt</Link></li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default EcomSearchBar


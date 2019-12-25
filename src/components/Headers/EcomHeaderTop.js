import React from 'react'
import { Link } from 'react-router-dom';

const EcomHeaderTop = () => {
  return (
    <>
    <div className="ref">EcomHeaderTop.js</div>
    <div className="ecom-headers-top">
      <ul>
        <li><Link to="#">About us</Link></li>
        <li><Link to="#">Our Shop</Link></li>
        <li><Link to="#">Customer Sercvice</Link></li>
        <li><Link to="#">Track Order</Link></li>
        <li><Link to="#">My Store</Link></li>
        <li><Link to="#">Partnership Card</Link></li>
        <li><Link to="#">Insurance</Link></li>
        <li><Link to="#">Currency</Link></li>
      </ul>
    </div>
    </>
  )
}

export default EcomHeaderTop

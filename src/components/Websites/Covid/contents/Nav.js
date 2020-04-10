import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="nav">
      <Link to="/covid">List by Country</Link>
      <Link to="/geocharts">Geo Charts</Link>
      <Link to="/dayonetotal">Day one Total</Link>
      <Link to="/countrystatus">Country Status</Link>
    </div>
  )
}
export default Nav
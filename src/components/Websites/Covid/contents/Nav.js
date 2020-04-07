import React from 'react'
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <Link to="/covid">List by Country</Link>
      <Link to="/geocharts">Geo Charts</Link>
      <Link to="/dayonetotal">Day one Total</Link>

    </div>
  )
}

export default Nav

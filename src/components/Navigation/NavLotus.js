import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import BtnThreelines from './BtnThreelines';

const menu = [
  {
    id: 1,
    name: 'Home',
    path: '#'
  },
  {
    id: 2,
    name: 'Aboutus',
    path: '#'
  },
  {
    id: 3,
    name: 'What we do',
    path: '/'
  },
  {
    id: 4,
    name: 'FAQ',
    path: '/'
  },
  {
    id: 5,
    name: 'Contact',
    path: '/'
  },
]




const NavLotus = () => {


  const [logo] = useState('L0Go');
  const [btnclosed, setBtnClosed] = useState('');
  //console.log('btn', btnclosed);


  const navToggle = () => {
    setBtnClosed(btnclosed === '' ? 'open' : '');
  }

  return (
    <>
      <div className="ref">NavLotus.js</div>

      <div className="navlotus">
        <div className="row logo">
          <Link to="#" className="brand-logo">{logo}</Link>
        </div>
        <div className="row menu-icon">
          <BtnThreelines navToggle={navToggle} btnclosed={btnclosed} />
        </div>

        <div className={`row menu ${btnclosed}`}>
          <ul className="nav-ul inline">
            {
              menu.map(item => {
                return (
                  <li key={item.id}>
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                );
              })
            }
          </ul>
        </div>
      </div>
    </>

  )
}

export default NavLotus;

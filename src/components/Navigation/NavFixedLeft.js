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
    name: 'Services',
    path: '/'
  },
  {
    id: 4,
    name: 'Our Team',
    path: '/'
  },
  {
    id: 5,
    name: 'Contact',
    path: '/'
  },
]

const NavFixedLeft = (props) => {

  return (
    <>
      <div className="navfixedleft">

        <BtnThreelines navToggle={props.navToggle} btnClosed={props.btnClosed} />

        <div className={`fixed-menu ${props.btnClosed}`}>
          <div className="logo">Logo</div>
          <div className="logo-title"><p>City Baker</p></div>
          <ul className="nav-main">
            {
              menu.map(item => {
                return <li key={item.id}><Link to="#">{item.name}</Link></li>
              })
            }
          </ul>
          <div className='contact'>
            <p>+44(0)00-0000-0000</p>
            <p>quickinfo@email.com</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default NavFixedLeft;

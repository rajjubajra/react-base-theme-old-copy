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


const NavWheat = () => {

  const [btnclosed, setBtnClosed] = useState('');
  console.log('btn', btnclosed);

  const navToggle = () => {
    setBtnClosed(btnclosed === '' ? 'open' : '');
  }


  return (
    <>
      <div className="ref">NavWheat.js</div>
      <div className="navwheat">


        <div className="mobileNavIcon">
          <BtnThreelines navToggle={navToggle} btnclosed={btnclosed} />
        </div>


        <div className={`menu ${btnclosed}`}>
          <div className="logo">Logo</div>
          <p>City Baker</p>
          <ul className="nav-main">
            {
              menu.map(item => {
                return <li key={item.id}><Link to="#">{item.name}</Link></li>
              })
            }
          </ul>
          <div className='contact'>
            <h3>+44(0)00-0000-0000</h3>
            <h3>quickinfo@email.com</h3>

          </div>
        </div>

      </div>
    </>
  )
}

export default NavWheat

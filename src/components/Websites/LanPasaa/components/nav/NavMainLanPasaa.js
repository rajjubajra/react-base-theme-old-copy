import React from 'react';
import { Link } from 'react-router-dom';




const main_menu = [
  {
    id: 1,
    name: 'Home',
    path: 'lanpasaa'
  },
  {
    id: 2,
    name: 'Shop',
    path: 'lanpasaa-shop'
  },
  {
    id: 3,
    name: 'About',
    path: 'lanpasaa-about'
  },
  {
    id: 4,
    name: 'Contact',
    path: 'lanpasaa-contact'
  },
]

const NavMainLanPasaa = () => {


  return (
    <>
      <div className="navmainlanpasaa">
        <ul>
          {
            main_menu.map(item => {
              return (
                <li key={item.id}>
                  <Link to={item.path} className="group-name">
                    {item.name}
                  </Link>
                </li>)
            })
          }
        </ul>
      </div>
    </>
  )
}
export default NavMainLanPasaa
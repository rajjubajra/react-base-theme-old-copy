import React from 'react';
import { Link } from 'react-router-dom';



const shop_menu = [
  {
    id: 1,
    name: 'Home',
    path: 'lanpasaa'
  },
  {
    id: 2,
    name: 'All',
    path: 'lanpasaa-all'
  },
  {
    id: 3,
    name: 'Women',
    path: 'lanpasaa-women'
  },
  {
    id: 4,
    name: 'Men',
    path: 'lanpasaa-men'
  },
  {
    id: 5,
    name: 'Sale',
    path: 'lanpasaa-sale'
  }

]


const NavShopLanPasaa = () => {
  return (
    <>
      <div className="navshoplanpasaa">
        <ul>
          {
            shop_menu.map(item => {
              return (
                <li kay={item.id}>
                  <Link to={item.path}>{item.name}</Link>
                </li>)
            })
          }
        </ul>
      </div>
    </>
  )
}

export default NavShopLanPasaa
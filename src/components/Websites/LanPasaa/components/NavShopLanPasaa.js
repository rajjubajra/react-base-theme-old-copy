import React, { useState } from 'react';
import { Link } from 'react-router-dom';



const shop_menu = [
  {
    id: 1,
    name: 'All',
    path: 'lanpasaa-all'
  },
  {
    id: 2,
    name: 'Women',
    path: 'lanpasaa-women'
  },
  {
    id: 3,
    name: 'Men',
    path: 'lanpasaa-men'
  },
  {
    id: 4,
    name: 'Sale',
    path: 'lanpasaa-sale'
  }

]


const NavShopLanPasaa = () => {
  const [groupId, setGroupId] = useState(0);

  console.log('group id', groupId);

  return (
    <>
      <div className="navshoplanpasaa">
        <ul>
          <li><Link to="lanpasaa" className="group-name">Home</Link></li>
          {
            shop_menu.map(item => {
              return (
                <li key={item.id}>
                  <div className="group-name" onClick={() => setGroupId(item.id)}>{item.name}</div>
                </li>)
            })
          }
        </ul>
      </div>
    </>
  )
}

export default NavShopLanPasaa
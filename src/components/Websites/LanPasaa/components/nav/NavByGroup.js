import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionAddAnimationToTitle } from '../../actions/actionNavigation';



const category_menu = [
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

const NavByGroup = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="navshoplanpasaa">
        <ul>
          <li>
            <Link to="/lanpasaa"
              onClick={() => dispatch(actionAddAnimationToTitle())}
              className="group-name">
              Home</Link></li>
          {
            category_menu.map((item) => {
              return <li key={item.id}><Link to="#"
                className="group-name">
                {item.name}</Link></li>
            })
          }
        </ul>
      </div>
    </>
  )
}
export default NavByGroup
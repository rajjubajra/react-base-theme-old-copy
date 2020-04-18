import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddAnimationToTitle, actionClearItemDetails } from '../../actions/actionNavigation';
import { actionFetchData } from '../../actions/actionFetchData';


const category_menu = [
  {
    id: 1,
    name: 'Women'
  },
  {
    id: 2,
    name: 'Men'
  },
  {
    id: 3,
    name: 'Kids'
  }
]


const NavByGroup = () => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.reducerCart.cart);
  console.log("CART: ", cart);

  const [hide, setHide] = useState([]);
  useEffect(() => {
    cart.length < 1 ? setHide("hide") : setHide([]);
  }, [cart])


  const listItemByGroup = (element) => {
    dispatch(actionFetchData(element));
    dispatch(actionClearItemDetails())
  }

  return (
    <>
      <div className="navshoplanpasaa">
        <ul>
          <li>
            <Link to="/lanpasaa"
              onClick={() => dispatch(actionAddAnimationToTitle())}
              className="group-name">
              Home
              </Link>
          </li>
          {
            category_menu.map((item) => {
              return <li key={item.id}><Link
                onClick={() => listItemByGroup(item.name)}
                className="group-name">
                {item.name}
              </Link>
              </li>
            })
          }
          <li className="cart">
            <Link to="/cart" className={`group-name ${hide}`}>Cart : {cart.length} items</Link>
          </li>
        </ul>
      </div>
    </>
  )
}
export default NavByGroup
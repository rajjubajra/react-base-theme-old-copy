import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { actionCategoryNav } from '../../../actions/actionNavigation';

const ShopCategory = (props) => {
  const [upDownArrow, setUpDownArrow] = useState('up');

  const dispatch = useDispatch();

  /** applicatble only in media_small */
  const changeArrow = () => (upDownArrow === 'up' ? setUpDownArrow('down') : setUpDownArrow('up'));

  return (
    <div className="category">
      <h3>Category <i onClick={() => changeArrow()} className={`shop-updown-arrow ${upDownArrow}`}></i></h3>
      <ul className={upDownArrow} onClick={() => changeArrow()}>
        {
          props.data.map((item, index) => {
            return <li
              key={index}
              /** pass Item name to redux store */
              /** in order to list view by Category in ShopItems.js file */
              onClick={() => dispatch(actionCategoryNav(item.name))}>
              {item.name}</li>
          })
        }
      </ul>
    </div>
  )
}
export default ShopCategory
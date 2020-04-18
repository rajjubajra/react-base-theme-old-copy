import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { actionCategoryNav } from '../../../actions/actionNavigation';
import { actionFetchCategories } from '../../../actions/actionFetchCategories';

const ShopCategory = () => {

  const [upDownArrow, setUpDownArrow] = useState('up');
  const list = useSelector(state => state.reducerFetchData.list);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchCategories());
  }, [dispatch])


  /** applicatble only in media_small */
  const changeArrow = () => (upDownArrow === 'up' ? setUpDownArrow('down') : setUpDownArrow('up'));

  return (
    <div className="category">
      <h3>Category <i onClick={() => changeArrow()} className={`shop-updown-arrow ${upDownArrow}`}></i></h3>
      <ul className={upDownArrow} onClick={() => changeArrow()}>
        {
          list.map((item, index) => {
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
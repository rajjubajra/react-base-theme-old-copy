import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchCategory, actionCategoryId } from '../actions/actionFetchCategory';


const Categories = () => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionFetchCategory());
  }, [dispatch])

  const categories = useSelector(state => state.reducerFetchCategory.categories);
  //console.log(categories);

  return (
    <div>
      <ul>
        {
          categories.map((item, index) => {
            return <li key={index}
              onClick={() => dispatch(actionCategoryId(item.id))}
              style={{ cursor: "pointer" }}>
              {item.name} [{item.products.length}]
              </li>
          })
        }
      </ul>
    </div>
  )
}
export default Categories
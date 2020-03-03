import React from 'react'
import { useSelector } from 'react-redux';
import ShopItem from './ShopItem';


const ShopItems = (props) => {

  /** get selected Category name from redux */
  /** inorder to list product item by category */
  const category = useSelector(state => state.reducerNavigation.category)

  /** PRODUCT LISTING */
  function viewCategory(category, item, catg) {
    if (category === '') {
      /** display all items */
      return <ShopItem item={item} />
    } else {
      if (category === catg.name) {
        /** display selected Category items */
        return <ShopItem item={item} />
      }
    }
  }

  return (
    <>
      {
        props.prod.map((catg) => {
          return catg.products.map(item => {
            return viewCategory(category, item, catg)
          })
        })
      }
    </>
  )
}
export default ShopItems

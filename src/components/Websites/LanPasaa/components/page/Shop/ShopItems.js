import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actionViewItemDetails } from '../../../actions/actionNavigation';
import { actionAddToCart } from '../../../actions/actonCart';


const ShopItems = (props) => {

  const dispatch = useDispatch();


  /** get selected Category name from redux */
  /** inorder to list product item by category */
  const category = useSelector(state => state.reducerNavigation.category)


  /** PRODUCT BLOCK [ shopItem ] */
  const shopItem = (item) => (
    <div key={item.id} className="product-item">
      <div className="product-image">
        <img
          src={require(`../../../../../../images/LanPasaa/fabrics-2.jpg`)}
          alt={item.name} />
      </div>
      <div className="product-name">
        <div className="name">{item.name}</div>
        <div className="rate">£ {Number(item.price).toFixed(2)}</div>
      </div>
      <div className="buttons">
        <button
          onClick={() => dispatch(actionViewItemDetails(
            item.id,
            item.name,
            item.price))}>
          View</button>
        <button onClick={() => dispatch(actionAddToCart(item.id, item.name, item.price))} >Add to cart</button></div>
    </div>
  )


  /** PRODUCT LISTING */
  function viewCategory(category, item, catg) {
    if (category === '') {
      return shopItem(item)
    } else {
      if (category === catg.name) {
        return shopItem(item)
      }
    }
  }

  return (
    <>
      {
        props.data.map((catg, index) => {
          return catg.products.map(item => {
            return viewCategory(category, item, catg)
          })
        })
      }
    </>
  )
}
export default ShopItems

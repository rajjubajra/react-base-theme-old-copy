import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionViewItemDetails } from '../../../actions/actionNavigation';
import { actionAddToCart, actionAddQty } from '../../../actions/actionCart';


/** PRODUCT BLOCK [ shopItem ] */
const ShopItem = ({ item }) => {

  // console.log("SHOPITEMS", props.prod, props.productIdInToTheCart);
  const dispatch = useDispatch();

  /** in order to handle ADD_TO_CART and ADD_QTY */
  /** if Product Id exist take action ADD_QTY else ADD_TO_CART */
  const cart = useSelector(state => state.reducerCart.cart);

  /** if Product Id exist in the cart array 
   * take action ADD_QTY else ADD_TO_CART */
  let indexId = (element) => element.id === item.id;
  let cartIndex = cart.findIndex(indexId);
  //console.log("CART INDEX?", cartIndex);

  return (
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
        {
          cartIndex === -1
            ? <button
              onClick={() => dispatch(actionAddToCart(item.id, item.name, item.price, 1, item.price))}>Add to cart</button>
            : <button onClick={() => dispatch(actionAddQty(cartIndex, item.name, item.price, 1, item.price))}> Add Quantity </button>
        }
      </div>
    </div >
  )
}
export default ShopItem;
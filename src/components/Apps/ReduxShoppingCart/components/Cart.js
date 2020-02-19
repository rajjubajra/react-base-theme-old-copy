import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveCartItem } from '../actions/actionCart';

const Cart = () => {

  const dispatch = useDispatch();

  /** CART ITEMS FROM REDUX STORE */
  const cartItems = useSelector(state => state.reducerCart.cart);
  const cartTtAmount = useSelector(state => state.reducerCart.totalAmount);


  /** Serial Number */
  let num = 1;

  return (
    <div>
      {/** NUMBER OF ITEMS IN THE CART ITEMS */}
      <ul>
        <li><b>Cart Items: {cartItems.length}</b></li>
      </ul>
      {/** LIST OF ITEMS IN THE CART */}
      <ul>
        {
          cartItems.length === 0 ? <li>Cart is empty.</li> :
            cartItems.map((item, index) => {
              return <li key={index}>
                {num++}  : {item.name} - {item.price}
                <button onClick={() => dispatch(actionRemoveCartItem(index, item.price))}>Remove</button>
              </li>
            })
        }
      </ul>
      {/** TOTAL AMOUT OF THE CART */}
      <ul><li><b>Total: £ {cartTtAmount.toFixed(2)} </b></li></ul>
    </div>
  )
}
export default Cart

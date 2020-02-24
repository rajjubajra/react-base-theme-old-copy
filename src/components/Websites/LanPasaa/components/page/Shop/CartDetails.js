import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionDeleteFromCart } from '../../../actions/actonCart';

const CartDetails = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.reducerCart.cart);
  const totalPrice = useSelector(state => state.reducerCart.totalPrice);
  console.log("cartItems", cartItems);
  return (
    <>
      <div className="cart-title"><h3>Cart Items</h3></div>
      <div className="cart-details">
        <div className="cart-header">
          <div>Code</div>
          <div>Product</div>
          <div>Price</div>
          <div></div>
        </div>
        <div className="cart-items">
          {
            cartItems.map((item, index) => {
              return <div key={index} className="items">
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.price}</div>
                <div><button onClick={() => dispatch(actionDeleteFromCart(index, item.price))}> X </button></div>
              </div>
            })
          }
        </div>
        <div className="cart-footer">
          <div></div>
          <div><b>Total Price:</b></div>
          <div><b>{Number(totalPrice).toFixed(2)}</b></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default CartDetails

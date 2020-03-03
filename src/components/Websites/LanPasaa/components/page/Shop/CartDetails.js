import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionAddQty, actionMinusQty, actionDeleteFromCart } from '../../../actions/actionCart';

const CartDetails = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector(state => state.reducerCart.cart);
  console.log("CART-ITEMS", cartItems);
  const multipleItems = useSelector(state => state.reducerCart.multipleItems);
  console.log("MULTIPLE ITEMS", multipleItems);
  const prdId = useSelector(state => state.reducerCart.prdId);
  console.log("PRD ID ITEMS", prdId);
  const totalPrice = useSelector(state => state.reducerCart.totalPrice);


  return (
    <>
      <div className="cart-title"><h3>Cart Items</h3></div>
      <div className="cart-details">
        <div className="cart-header">
          <div>Code</div>
          <div>Product</div>
          <div>Qty</div>
          <div>Price</div>
          <div>Amount</div>
          <div></div>
        </div>
        <div className="cart-items">
          {
            cartItems.map((item, index) => {
              return <div key={index} className="items">
                <div>{item.id}</div>
                <div>{item.name}</div>
                <div>{item.qty}</div>
                <div>{Number(item.price).toFixed(2)}</div>
                <div>{Number(item.amount).toFixed(2)}</div>
                <div style={{ display: "flex" }}>
                  <button onClick={() => dispatch(actionMinusQty(index, item.price))} title="minus item"> - </button>
                  <button onClick={() => dispatch(actionAddQty(index, item.name, item.price, 1, item.price))} title="add item"> + </button>
                  <button onClick={() => dispatch(actionDeleteFromCart(index, item.amount))} title="remove all">X</button>
                </div>
              </div>
            })
          }
        </div>
        <div className="cart-footer">
          <div></div>
          <div><b>Total Price:</b></div>
          <div></div>
          <div></div>
          <div><b>{Number(totalPrice).toFixed(2)}</b></div>
          <div></div>
        </div>
      </div>
    </>
  )
}
export default CartDetails
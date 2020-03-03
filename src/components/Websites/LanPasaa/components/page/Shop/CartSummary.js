import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { actionClearCart, actionVeiwCart } from '../../../actions/actionCart';


const CartSummary = () => {
  const dispatch = useDispatch();
  const cartLength = useSelector(state => state.reducerCart.cart.length);
  const totalPrice = useSelector(state => state.reducerCart.totalPrice);
  const viewCart = useSelector(state => state.reducerCart.viewCart);

  return (
    <div className="cart-summary">
      <div>Numebr of Items: {cartLength}</div>
      <div>Total Price: {Number(totalPrice).toFixed(2)}</div>
      <div className="buttons">
        <button
          onClick={() => dispatch(actionClearCart())}>
          Clear Cart
        </button>
        <button onClick={() => dispatch(actionVeiwCart())}>
          {viewCart ? 'Hide Cart' : 'View Cart'}
        </button>
      </div>
    </div>
  )
}

export default CartSummary;

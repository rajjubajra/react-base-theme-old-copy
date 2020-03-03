import React from 'react'
import { useDispatch } from 'react-redux';
import { actionViewItemDetails } from '../../../actions/actionNavigation';
import { actionAddToCart } from '../../../actions/actionCart';

const Product = ({ id, name, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div key={id} className="product-item">
      <div className="product-image">
        <img src={require(`../../../../../../images/LanPasaa/fabrics-2.jpg`)} alt={name} />
      </div>
      <div className="product-name">
        <div className="name">{name}</div>
        <div className="rate">£ {price}</div>
      </div>
      <div className="buttons">
        <button
          onClick={() => dispatch(actionViewItemDetails(
            id,
            name,
            price))}>
          View</button>
        <button onClick={() => dispatch(actionAddToCart(id, name, price, 1, amount))} >Add to cart</button></div>
    </div>
  )
}

export default Product

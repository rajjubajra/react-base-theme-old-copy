import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionClearItemDetails } from '../../../actions/actionNavigation';
import { actionAddToCart } from '../../../actions/actonCart';

const ShopItemDetails = () => {
  const dispatch = useDispatch();

  /** get selected product Id from redux store */
  const itemId = useSelector(state => state.reducerNavigation.itemId);
  const itemName = useSelector(state => state.reducerNavigation.itemName);
  const itemPrice = useSelector(state => state.reducerNavigation.itemPrice);

  return (
    <div className="product-item">
      <div className="image">
        <img className="sale-item" src={require(`../../../../../../images/LanPasaa/fabrics-2.jpg`)} alt={itemId.name} />
      </div>
      <div className="details">
        <div className="product-code">Product Code: {itemId}</div>
        <div className="product-name">Product: {itemName}</div>
        <div className="rate">Price: £ {Number(itemPrice).toFixed(2)}</div>
        <div className="description">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro doloribus, natus iste a nulla suscipit totam eos iure, deserunt, molestiae impedit veniam. Fuga non iste in consequuntur a nemo dicta!</p>
        </div>
        <div className="buttons">
          <button onClick={() => dispatch(actionClearItemDetails())}>BACK</button>
          <button
            onClick={() => dispatch(actionAddToCart(itemId, itemName, itemPrice))} >
            Add to cart</button>
        </div>

      </div>
    </div>
  )
}
export default ShopItemDetails;


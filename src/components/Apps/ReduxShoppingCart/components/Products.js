import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actionAddToCart } from '../actions/actionCart';

const Products = () => {

  const dispatch = useDispatch();
  /** CATEGORY DATA FROM REDUX STORE */
  const categories = useSelector(state => state.reducerFetchCategory.categories);
  const cateId = useSelector(state => state.reducerFetchCategory.categoryId)

  /** PRODUCCT LISTING BLOCK */
  const productDetail = (id, name, price) => {
    return (
      <li key={id} style={{ padding: "20px" }}>
        {name}
        <p>Price: £ {price}</p>
        <button onClick={() => dispatch(actionAddToCart(id, name, price))}>
          Add To Basket
        </button>
        <button >
          View Detail
        </button>
      </li>
    )
  }

  return (<div>
    {
      categories.map((item, index) => {
        return <ul key={index}>{item.products.map((prod) => {
          if (cateId === 0) {
            return productDetail(prod.id, prod.name, prod.price);
          }
          if (cateId === item.id) {
            return productDetail(prod.id, prod.name, prod.price);
          }
        }
        )}
        </ul>
      })
    }
  </div>)
}

export default Products
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


  const productListing = (category_id, product_id, name, price) => {
    /** list all */
    if (cateId === 0) {
      return productDetail(product_id, name, price);
    }
    /** list by category */
    if (cateId === category_id) {
      return productDetail(product_id, name, price);
    }
  }


  return (<div>
    {
      categories.map((item, index) => {
        return <ul key={index}>{item.products.map((prod) => {
          return productListing(item.id, prod.id, prod.name, prod.price);
        }
        )}
        </ul>
      })
    }
  </div>)
}

export default Products
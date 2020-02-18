import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {

  const categories = useSelector(state => state.reducerFetchCategory.categories);
  const cateId = useSelector(state => state.reducerFetchCategory.categoryId)

  const productDetail = (id, name, price) => {
    return (
      <li key={id}>
        {name}
        <p>Price: £ {price}</p>
        <button>Add To Basket</button>
      </li>
    )
  }

  return (<div>
    {
      categories.map((item, index) => {
        return <ul key={index}>{item.products.map((prod) => {
          return cateId === 0
            ? productDetail(prod.id, prod.name, prod.price)
            : productDetail(prod.id, prod.name, prod.price)
        }
        )}
        </ul>
      })
    }
  </div>)
}

export default Products
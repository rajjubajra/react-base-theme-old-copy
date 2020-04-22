import React from 'react'
import { useSelector } from 'react-redux';
import ShopCategory from './ShopCategory'
import ShopItems from './ShopItems'
import ShopItemDetails from './ShopItemDetails';
import CartDetails from './CartDetails';
import CartSummary from './CartSummary';




const Shop = () => {


  /** DATA FROM REDUX STORE
  being passed in to all the components **/
  const data = useSelector(state => state.reducerFetchData.list);
  const products = useSelector(state => state.reducerFetchProducts);
  console.log("SHOP JS: ", data, products, typeof (data));




  /** Item id for view product list or single item */
  const itemId = useSelector(state => state.reducerNavigation.itemId);

  /** cart totalprice for show hide summary */
  const totalPrice = useSelector(state => state.reducerCart.totalPrice);

  /** cart view : true or false */
  const cartView = useSelector(state => state.reducerCart.viewCart);
  //console.log("CART VIEW", cartView);

  /** category name */
  const category = useSelector(state => state.reducerNavigation.category);
  const categoryname = category === '' ? '' : `'s ${category}`;
  const groupname = useSelector(state => state.reducerFetchData.groupname);

  return (
    <div className="shop">

      {/** CATEGORIES LIST */}
      <section className="categories">
        <ShopCategory />
      </section>

      {/** PRODUCT LIST | CART VIEW */}

      <section className="product">
        {/** do not view if cart is empty */
          totalPrice === 0 ? '' : <CartSummary />
        }

        { /** view cart details */
          cartView === true && totalPrice > 0 ? <CartDetails /> : ''
        }

        {/** LIST OF PRODUCTS */
          itemId === 0
            ? <>
              <h3><b>{groupname}{categoryname}</b></h3>
              <div className="product-list">
                <ShopItems prod={data} />
              </div>
            </>
            : ''
        }

        {
          /** SINGLE PRODUCT DETAILS */
          itemId === 0
            ? ''
            : <>
              <h3>Product List: <b>{category}</b></h3>
              <div className="product-details">
                <ShopItemDetails />
              </div>
            </>
        }
      </section>
    </div>
  )
}
export default Shop
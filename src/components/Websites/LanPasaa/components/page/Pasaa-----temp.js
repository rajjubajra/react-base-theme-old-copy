import React, { useState, useEffect } from 'react'



const storedata = [
  {
    id: 1,
    group_id: 3,
    image: 'blank-image',
    category: 'men',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '20',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 2,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '10',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 3,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '12',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 4,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '15',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 5,
    group_id: 3,
    image: 'blank-image',
    category: 'men',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '16',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 6,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '7',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 7,
    group_id: 3,
    image: 'blank-image',
    category: 'men',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '5',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 8,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '25',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 9,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '8',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 10,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '19',
    status: 'Sale',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 11,
    group_id: 3,
    image: 'blank-image',
    category: 'men',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '15',
    status: 'Sale',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 12,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '9',
    status: 'Sale',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 13,
    group_id: 3,
    image: 'blank-image',
    category: 'men',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '10',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 14,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '27',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },
  {
    id: 15,
    group_id: 2,
    image: 'blank-image',
    category: 'women',
    product_name: 'Shirt',
    product_size: 'Small',
    rate: '10',
    status: '',
    desc: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto nisi repellendus aut nihil, dolore omnis velit. Saepe tempora nulla adipisci, ipsa voluptate officiis, magni laboriosam iste dignissimos odit, distinctio quis.'
  },

]


const Pasaa = () => {
  const [productId, setProductId] = useState(0);
  const [productList, setProductList] = useState();
  const [productItem, setProducItem] = useState();

  const imagepath = '';

  // const dispatch = useDispatch();
  // const basket = useSelector(state => state.basket);
  // console.log('BASKET ? ', basket);

  useEffect(() => {
    /** Display all producct list  */
    setProductList(
      storedata.map(item => {
        return (
          <div className="product" key={item.id} onClick={() => setProductId(item.id - 1)}>
            <div className="product-image">
              <img
                src={require(`../../../../../images/${item.image}.png`)}
                alt={item.product_name} />
            </div>
            <div className="product-name">
              <div className="name">{item.category}s' {item.product_name}-{item.id}</div>
              <div className="status">{item.status}</div>
            </div>
            <div className="rate">£ {Number(item.rate).toFixed(2)}</div>
          </div>
        );
      })
    )
  }, [])

  useEffect(() => {

    function nextSlide() {
      return storedata.length - 1 === productId ? '' : setProductId(productId + 1);
    }
    function prevSlide() {
      return productId === 0 ? setProductId(0) : setProductId(productId - 1);
    }


    if (productId !== 0) {
      setProducItem(
        <div className="product-item">
          <img
            className={storedata[productId].status !== "" ? "sale-item" : ''}
            src={require(`../../../../../images/${storedata[productId].image}.png`)} alt="item" />
          <div>
            <div className="pasaa-next-prev">
              <div className="prev" onClick={prevSlide}>prev</div>
              {productId}
              <div className="next" onClick={nextSlide}>next</div>
            </div>
            {storedata[productId].status !== '' ? <div className="status">{storedata[productId].status}</div> : ''}
            <div className="product-name">
              {storedata[productId].category} {storedata[productId].product_name} - {storedata[productId].id}
            </div>
            <div className="rate">£ {Number(storedata[productId].rate).toFixed(2)}</div>
            <div className="desc">{storedata[productId].desc} - [{storedata.length}]</div>
            <div className="buy-btn">
              <button className="btn">Add to basket</button>
            </div>
            <div>Basket:</div>
          </div>
        </div>)
    } else {
      setProducItem('Product is not available');
    }

  }, [productId]);



  //  console.log('Product Id', productId);

  return (
    <div className="pasaa">
      {productId === 0
        ? <div className="product-listing">{productList}</div>
        : productItem}
    </div>
  )
}

export default Pasaa
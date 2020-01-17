import React from 'react'



const dummyPrice = [
  {
    id: 1,
    image: 'rsz_bread-36',
    title: "Price List of Bread",
    desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora iusto ipsam, et, nihil cumque laudantium dolore vel ipsum laborum architecto earum eligendi adipisci harum mollitia aliquam rem modi inventore."
  },
  {
    id: 2,
    image: 'rsz_cake-44',
    title: "Price List of Cake",
    desc: "Carem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum tempora iusto ipsam, et, nihil cumque laudantium dolore vel ipsum laborum architecto earum eligendi adipisci harum mollitia aliquam rem modi inventore."
  }

]


const TwoColPriceWheat = () => {
  return (
    <>
      <div className="ref">TwoColPriceWheat.js</div>
      <div className="twocolpricewheat">
        <div className="header">Price</div>
        <div><h1>Price List</h1></div>
        <div className="price-group">
          {
            <div>
              <div className="icon">
                <img
                  src={require(`../../images/wheat/${dummyPrice[0].image}.jpg`)} alt="product" />
              </div>
              <h2>{dummyPrice[0].title}</h2>
              <p>{dummyPrice[0].desc}</p>
            </div>
          }
          {
            <div>
              <div className="icon">
                <img
                  src={require(`../../images/wheat/${dummyPrice[1].image}.jpg`)} alt="product" />
              </div>
              <h2>{dummyPrice[1].title}</h2>
              <p>{dummyPrice[1].desc}</p>
            </div>
          }
        </div>
        <div className="button">
          <button className="btn">Detail</button>
        </div>
      </div>
    </>
  )
}

export default TwoColPriceWheat

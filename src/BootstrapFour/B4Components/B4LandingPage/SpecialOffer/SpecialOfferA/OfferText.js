import React from 'react'
import OfferEndDate from './OfferEndDate'


function OfferText() {
  return (
    <div className="card d-flex align-items-center border-0 h-100" >
      <div className="card-body" style={{ marginTop: "20%" }}>
        <h1 className="card-title">ipsumdolors <br />tenetur suntlandis!</h1>
        <p className="card-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ipsam provident cumque vitae quasi atque consequatur praesentium, pariatur quas doloremque voluptate et quod error perspiciatis debitis consequuntur amet iusto quos.
        </p>
        <button className="btn btn-primary">View More</button>

        <div className="card-text" style={{ marginTop: "25%" }}>
          <OfferEndDate />
        </div>

      </div>

    </div>
  )
}

export default OfferText

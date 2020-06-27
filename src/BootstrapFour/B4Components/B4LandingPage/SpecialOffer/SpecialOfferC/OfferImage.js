import React from 'react'
import wine81 from '../../../../../images/Food/wine81.jpg';

function OfferImage() {
  return (
    <div className="card">
      <img className="card-img" src={wine81} alt="Card image" />
      <div className="card-img-overlay">
        <p className="card-text">I'm text that has a background image!</p>
      </div>
    </div>
  )
}

export default OfferImage

import React from 'react'
import wine80 from '../../../../../images/Food/wine80.jpg';

function OfferImage() {
  return (
    <div className="card">
      <img className="card-img" src={wine80} alt="Card image" />
      <div className="card-img-overlay">
        <p className="card-text">I'm text that has a background image!</p>
      </div>
    </div>
  )
}

export default OfferImage

import React from 'react'


const B3TextImage = ({img}) => {
  return (
    <div className="b3textimage">
      <img src={img} alt="show" />
      <div className="text-on-image">
          <h3>Text on top of Image</h3>
      </div>
    </div>
  )
}

export default B3TextImage

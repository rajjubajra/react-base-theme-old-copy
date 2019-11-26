import React from 'react'


const B3Card = ({img, title, text}) => {
  return (
    <div className="b3card">

      <div className="image">
        <img src={img} alt="card-img" />
      </div>

      <div className="text">
        <h3>{title}</h3>
        <p>{text}</p>
      </div>

      <div className="nav-btn">
        <button className="btn-small-wide">Read More</button>
      </div>
    
    </div>
  )
}

export default B3Card

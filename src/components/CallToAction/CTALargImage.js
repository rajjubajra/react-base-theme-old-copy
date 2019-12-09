import React from 'react'
import img from '../../images/b3image-3.jpg';

const CTALargImage = () => {
  return (
    <div className="ctalargeimage">
      <div className="text-block">
        <div className="container">
          <h1>Today's special</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa beatae aperiam quae rem eum quas nostrum officiis alias iure! Error vel odit dolorum dicta facilis at dolores repellendus officia amet?</p>
        </div>
      </div>
      <div className="image-block">
        <img src={img} alt="large" />
      </div>
    </div>
  )
}

export default CTALargImage

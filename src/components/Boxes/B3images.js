import React from 'react';
import img1 from './../../images/b3image-1.jpg';
import img2 from './../../images/b3image-2.jpg';
import img3 from './../../images/b3image-3.jpg';


const B3Images = () => {

  return (
    <>
      <div className="ref">b3images.js and b3image.js</div>
      <h2>B3Images</h2>
      <div className="b3images">
        <img src={img1} alt='top' />
        <img src={img2} alt='top' />
        <img src={img3} alt='top' />
      </div>
    </>
  )
}

export default B3Images

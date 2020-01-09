import React from 'react'
import B3TextImage from './B3TextImage'
import img1 from '../../images/b3textimage-1.jpg';
import img2 from '../../images/b3textimage-2.jpg';
import img3 from '../../images/b3textimage-3.jpg';


const B3TextImages = () => {
  return (
    <>
      <div className="ref">B3TextImages.js</div>
      <h2>B3TextImages</h2>
      <div className="b3textimages">
        <h1>Education</h1>
        <p>Ipsum dolor sit amet consectetur adipisicing elit. Dolorum fugiat ipsam saepe corporis eum nihil necessitatibus deserunt officia, sint cupiditate a id itaque architecto. </p>
        <div className="text-image-block">
          <B3TextImage img={img1} />
          <B3TextImage img={img2} />
          <B3TextImage img={img3} />
        </div>
      </div>
    </>
  )
}

export default B3TextImages

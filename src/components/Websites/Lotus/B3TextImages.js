import React from 'react'
import B3TextImage from './B3TextImage'
import img1 from '../../../images/png-image/icon_link.png';
import img2 from '../../../images/png-image/icon_file.png';
import img3 from '../../../images/png-image/icon_pen.png';


const B3TextImages = () => {
  return (
    <>
      <div className="b3textimages">
        <h1>Education</h1>
        <h2>for all challanges !</h2>
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

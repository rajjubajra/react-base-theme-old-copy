import React from 'react';
import ImageDev from '../../../../../images/Portfolio2020/dev.svg';

function AboutusImage() {
  return (
    <div className="aboutus-image d-flex justify-content-md-center">
      <img style={{ maxWidth: "200px", margin: "0px auto", paddingTop: "35%" }} src={ImageDev} alt="about-us" />
    </div>
  )
}

export default AboutusImage

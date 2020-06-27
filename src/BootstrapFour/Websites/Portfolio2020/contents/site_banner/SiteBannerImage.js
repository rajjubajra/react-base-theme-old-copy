import React from 'react';
import developer from '../../../../../images/Portfolio2020/Designer.svg';

function SiteBannerImage() {
  return (
    <div className="text-center" >
      <img
        style={{
          maxWidth: "350px",
          margin: "0px auto",
          animation: "fadeIn 4s",
          animationFillMode: "both"
        }} src={developer} alt="dev" />
    </div>

  )
}

export default SiteBannerImage

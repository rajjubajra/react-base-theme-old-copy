import React from 'react';
import Title from '../global/Title';
import SubTitle from '../global/SubTitle';



function SiteBannerTitle() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }} className="site-title">
      <h3 className="title-tex" style={{ paddingTop: "35%" }}>Hello</h3>
      <Title title="I am a Lion" />
      <SubTitle title="King of the jungle" />
      <div className="site-buttons">
        <div className="d-flex flex-rw flex-wrap justify-content-center">
          <button type="button" className="btn button primary-button mr-4 text-uppercase">Why me?</button>
          <button type="button" className="btn button primary-button mr-4 text-uppercase">Get Quote</button>
        </div>
      </div>
    </div>
  )
}

export default SiteBannerTitle

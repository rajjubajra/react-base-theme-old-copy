import React from 'react'



function SiteBannerTitle() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    }} className="site-title">
      <h3 className="title-tex" style={{ paddingTop: "35%" }}>Hello</h3>
      <h1 className="title-text text-uppercase">I am a Lion</h1>
      <h4 className="title-text text-uppercase">King of the jungle</h4>
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

import React from 'react';
import Title from '../global/Title';
import SubTitle from '../global/SubTitle';
import Button from 'react-bootstrap/Button';




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
          <Button className="mr-1" variant="primary">Why me?</Button>
          <Button className="ml-1" variant="primary">Get Quote</Button>
        </div>
      </div>
    </div>
  )
}

export default SiteBannerTitle

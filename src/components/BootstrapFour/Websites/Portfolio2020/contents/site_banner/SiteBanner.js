import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SiteBannerTitle from './SiteBannerTitle';
import SiteBannerImage from './SiteBannerImage';


function SiteBanner() {

  return (
    <Container>
      <Row>
        <Col lg={6} md={12} className="text-center">
          <div>
            <SiteBannerTitle />
          </div>
        </Col>
        <Col lg={6} md={12}>
          <div>
            <SiteBannerImage />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default SiteBanner

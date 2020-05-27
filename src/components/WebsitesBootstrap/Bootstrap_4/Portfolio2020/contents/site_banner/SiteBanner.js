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
        <Col lg={6} md={12} className="site-title"><SiteBannerTitle /></Col>
        <Col lg={6} md={12} className="banner-image"><SiteBannerImage /></Col>
      </Row>
    </Container>
  )
}

export default SiteBanner

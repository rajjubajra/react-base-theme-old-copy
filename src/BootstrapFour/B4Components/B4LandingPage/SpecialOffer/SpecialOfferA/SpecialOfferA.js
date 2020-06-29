import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OfferText from './OfferText';
import OfferImage from './OfferImage';


function SpecialOfferA() {
  return (
    <>
      <Container>
        <Row>
          <Col
            lg={6}
            sm={12}
          >
            <OfferText />
          </Col>
          <Col
            lg={6}
            sm={12}
          >
            <OfferImage />
          </Col>
        </Row>
      </Container>

    </>
  )
}

export default SpecialOfferA

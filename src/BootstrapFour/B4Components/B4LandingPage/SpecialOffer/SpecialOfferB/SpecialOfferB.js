import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OfferText from './OfferText';
import OfferImage from './OfferImage';
import OfferEndDate from './OfferEndDate';


function SpecialOfferB() {
  return (
    <>
      <Container>
        <Row>
          <Col
            lg={6}
            sm={12}

          >
            <OfferImage />

          </Col>
          <Col
            lg={6}
            sm={12}
          >
            <OfferText />
          </Col>
        </Row>
        <Row>
          <div className="d-flex justify-content-center w-100 mt-5">
            <OfferEndDate />
          </div>
        </Row>
      </Container>

    </>
  )
}

export default SpecialOfferB

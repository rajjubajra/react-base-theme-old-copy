import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function CarouselItem(props) {
  return (
    <Row className="cleint">
      <Col lg={4} md={12} className="client-img">
        <img style={{ maxWidth: '100px' }} src={props.img} alt={props.alt} class="img-fluid" />
      </Col>
      <Col lg={8} md={12} className="about-client">
        <h4 className="text-uppercase">{props.cleintName}</h4>
        <p className="para">{props.reviewText}</p>
      </Col>
    </Row>
  )
}

export default CarouselItem

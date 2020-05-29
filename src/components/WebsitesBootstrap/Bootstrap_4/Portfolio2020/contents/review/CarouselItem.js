import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Media from 'react-bootstrap/Media';
import Container from 'react-bootstrap/Container';

function CarouselItem(props) {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col lg={6}>
          <Media>
            <img
              style={{ maxWidth: '100px' }}
              width={64}
              height={64}
              className="mr-3"
              src={props.img}
              alt={props.alt}
            />
            <Media.Body>
              <h5>{props.cleintName}</h5>
              <p>{props.reviewText}</p>
            </Media.Body>
          </Media>
        </Col>
      </Row>
    </Container>


  )
}

export default CarouselItem

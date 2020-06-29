import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailNTel from '../address/EmailNTel';


const bigFont = {
  fontSize: "2rem"
}

function Text() {
  return (
    <Container>
      <Row>
        <Col lg={6} style={bigFont}>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi id illo quibusdam voluptas sint rem in non corrupti eum, repellat est eius odio neque amet sapiente a, et culpa ipsam?</p>

          <p>Amet consectetur adipisicing elit. Animi vitae dolorem doloribus, asperiores ipsam similique et eius dolor omnis porro, repellat earum eligendi sequi aliquam quidem assumenda nemo enim molestiae!</p>

          <p></p>
          <p>Rimilique et eius dolor omnis porro</p>
        </Col>
        <Col lg={6}></Col>
      </Row>
      <Row>
        <EmailNTel />

      </Row>
    </Container>
  )
}

export default Text

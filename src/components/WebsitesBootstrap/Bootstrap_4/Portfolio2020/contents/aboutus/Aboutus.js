import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutusContent from './AboutusContent';
import AboutusImage from './AboutusImage';

function Aboutus() {
  return (

    <Container>
      <Row>
        <Col lg={6} md={12}><AboutusImage /></Col>
        <Col lg={6} md={12}><AboutusContent /></Col>
      </Row>
    </Container>


  )
}

export default Aboutus

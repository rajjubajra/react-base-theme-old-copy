import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Title from '../global/Title';
import Text from '../global/Text';
import Carousel from './Carousel';

function Review() {
  return (
    <Container>
      <Row>
        <Title title="Client Say about me" />
        <Text text='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, deleniti
        recusandae. Esse incidunt rem repellendus ab voluptates maxime? Nemo, numquam!' />
      </Row>
      <Row>
        <Carousel />
      </Row>
    </Container>
  )
}

export default Review

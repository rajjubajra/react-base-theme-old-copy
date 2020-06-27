import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import ServiceTitle from './ServiceTitle';
import ServiceList from './ServiceList';
import { useInView } from 'react-intersection-observer';

function Services() {
  const [refServices, inVeiwServices] = useInView({
    threshold: 0.3,
  })
  return (
    <Container ref={refServices}>
      <Row>
        <ServiceTitle />
        <ServiceList css_class={inVeiwServices ? 'fade-in' : 'fade-out'} />
      </Row>
    </Container>
  )
}

export default Services

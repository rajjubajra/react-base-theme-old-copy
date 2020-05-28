import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ServiceTitle from './ServiceTitle'
import ServiceList from './ServiceList'

function Services() {
  return (
    <Container>
      <Row>
        <ServiceTitle />
        <ServiceList />
      </Row>
    </Container>
  )
}

export default Services

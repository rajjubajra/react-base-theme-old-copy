import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ButtonGroup from './ButtonGroup';
import Title from '../global/Title';
import GroupItems from '../projects/GroupItems';
import Col from 'react-bootstrap/Col';

function Project() {
  return (
    <Container>
      <Row>
        <Col>
          <Title title="Recently Done Projects" />
        </Col>
      </Row>
      <Row className='mt-3 mb-3'>
        <Col>
          <ButtonGroup />
        </Col>
      </Row>
      <Row>
        <Col>
          <GroupItems />
        </Col>
      </Row>
    </Container>
  )
}

export default Project

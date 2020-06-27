import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ButtonGroup from './ButtonGroup';
import Title from '../global/Title';
import GroupItems from './GroupItems';
import Col from 'react-bootstrap/Col';
import { useInView } from 'react-intersection-observer';


function Project() {
  const [refProject, inViewProject] = useInView({
    threshold: 0.15,
  })
  return (
    <Container ref={refProject}>
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
      <Row className={inViewProject ? 'fade-in' : 'fade-out'}>
        <Col>
          <GroupItems />
        </Col>
      </Row>
    </Container>
  )
}

export default Project

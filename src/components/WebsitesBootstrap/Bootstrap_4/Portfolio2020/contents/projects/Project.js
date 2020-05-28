import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ButtonGroup from './ButtonGroup';
import Title from '../global/Title';
import GroupItems from '../projects/GroupItems';

function Project() {
  return (
    <Container>
      <Row>
        <Title title="Recently Done Projects" />
        <ButtonGroup />
        <GroupItems />

      </Row>
    </Container>
  )
}

export default Project

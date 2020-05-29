import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Title from '../global/Title'
import Text from '../global/Text'
import SubscriptionForm from './SubscriptionForm'

function Subscribe() {
  return (
    <Container className="subscribe">
      <Row> <Title title="Subscribe me" /></Row>
      <Row>
        <Text text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, consequuntur." />
      </Row>
      <div className="d-sm-flex justify-cotent-center">
        <SubscriptionForm />
      </div>
    </Container>
  )
}

export default Subscribe

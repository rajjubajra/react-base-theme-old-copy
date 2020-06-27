import React from 'react'
import Col from 'react-bootstrap/Col';
import Title from '../global/Title';
import Text from '../global/Text';

function ServiceTitle() {
  return (
    <Col lg={12} className="text-center service-title">
      <Title title="Service Offers" />
      <Text text="<p>
        There are many variations of passages of Lorem Ipsum available, but the majority have
        suffered alteration in some form, by injected humour
      </p>" />
    </Col>
  )
}

export default ServiceTitle

import React from 'react'
import Col from 'react-bootstrap/Col'

function Tool(props) {
  return (
    <Col lg={4} md={6} sm={6}>
      <div className="single-tool">
        <img style={{ width: "100%" }} src={props.logo} alt={props.alt} />
      </div>
    </Col>
  )
}

export default Tool

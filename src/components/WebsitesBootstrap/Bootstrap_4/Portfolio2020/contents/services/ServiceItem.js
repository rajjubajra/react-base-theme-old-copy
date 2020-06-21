import React from 'react'
import Card from 'react-bootstrap/Card';

function ServiceItem(props) {
  return (
    <Card
      className={props.cssclass}
      style={{ animationDelay: `${props.delay * 0.5}s` }}>

      <Card.Img variant="top" style={{ padding: "20px", maxHeight: "230px" }} src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}{props.delay}</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <small className="text-muted">Last updated 3 mins ago</small>
      </Card.Footer>

    </Card>
  )
}

export default ServiceItem

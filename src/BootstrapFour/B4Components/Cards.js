import React from 'react'
import Card from 'react-bootstrap/Card';


function Cards(props) {
  return (
    <Card style={{
      width: '18rem',
      height: '200px',
      position: 'relative',
      margin: "10px",
      borderRadius: '0px'
    }} >
      <Card.Body>
        <Card.Title style={{
          position: "absolute",
          top: "20%"
        }}>{props.title}</Card.Title>
        <Card.Link
          style={{
            position: "absolute",
            bottom: "10px"
          }}
          href={props.linkref}>Preveiw</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default Cards




import React from 'react';
import Card from 'react-bootstrap/Card';


function Tool(props) {


  return (
    <Card className="m-2 p-2 text-white" style={{ justifyContent: "center" }}>
      <Card.Img src={props.logo} style={{ width: '200px', minHieght: "206px", filter: 'grayscale(100%)' }} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          {props.text}
        </Card.Text>
        <Card.Text>Next Text</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default Tool

import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function GroupItem(props) {
  return (
    <Link to="#">
      <Card>
        <Card.Img variant="top" src={props.img} />
        <Card.Body>
          <Card.Title>{props.groupTitle}</Card.Title>
          <Card.Text>{props.groupBrief}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default GroupItem



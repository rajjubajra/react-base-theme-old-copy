import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';


function GroupItem(props) {
  return (
    <Link to="#" className={props.itemClass}>
      <Card>
        <Card.Img variant="top" src={props.itemImg} />
        <Card.Body>
          <Card.Title>{props.itemTitle}</Card.Title>
          <Card.Text>{props.itemBrief}</Card.Text>
        </Card.Body>
      </Card>
    </Link>
  )
}

export default GroupItem


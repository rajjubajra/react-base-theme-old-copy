import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import './GroupItems.scss';


function GroupItem(props) {

  return (

    <Link to="#" className={props.inView ? "start-fade" : props.itemGroup} style={{ animationDelay: `${props.delay * 0.2}s` }}>
      <Card>
        <Card.Img variant="top" src={props.itemImg} />
        <Card.Body>
          <Card.Title>{props.delay}{props.itemTitle}</Card.Title>
          <Card.Text>{props.itemBrief}</Card.Text>
        </Card.Body>
      </Card>
    </Link>


  )
}

export default GroupItem



import React from 'react';
import Card from 'react-bootstrap/Card';

function MusicCard(props) {
  return (
    <Card className="bg-dark text-white mt-5">
      <Card.Img style={{ width: "100%", height: "auto", border: "1px solid #000", margin: "0px 2px" }} src={props.img} alt={props.alt} />
      <Card.ImgOverlay>
        <Card.Text>{props.title}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default MusicCard

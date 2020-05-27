import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


const WebsitesBootsrap = () => {

  return (
    <Container>
      <Row>
        <h2>Websites [Bootstrap]</h2>
      </Row>
      <Row>

        <Cards title="Profile 2020" linkref="/portfolio2020" />
        <Cards title="Blank Card 1" linkref="#" />
        <Cards title="Blank Card 2" linkref="#" />
        <Cards title="Blank Card 3" linkref="#" />
        <Cards title="Blank Card 4" linkref="#" />
        <Cards title="Blank Card 5" linkref="#" />

      </Row>
    </Container>
  )
}

export default WebsitesBootsrap

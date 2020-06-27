import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Cards from '../Cards';
import TitleNNav from '../B4Header.sj/TitleNNav';

function LandingPage() {
  return (
    <Container className='mt-5'>
      <TitleNNav title={"LandingPage"} href={"websites-bootstrap"} />
      <Row>
        <Cards title="Special Offer" linkref="/special-Offer" />
        <Cards title="Blank Card 1" linkref="#" />
        <Cards title="Blank Card 2" linkref="#" />
        <Cards title="Blank Card 3" linkref="#" />
        <Cards title="Blank Card 4" linkref="#" />
        <Cards title="Blank Card 5" linkref="#" />
      </Row>
    </Container>
  )
}

export default LandingPage

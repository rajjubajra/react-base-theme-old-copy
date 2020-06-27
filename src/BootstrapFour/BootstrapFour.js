import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cards from './B4Components/Cards';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import TitleNNav from './B4Components/B4Header.sj/TitleNNav';
import './BootstrapFour.scss';


const BootsrapFour = () => {

  return (
    <Container className='mt-5'>

      <TitleNNav title={'Websites [Bootstrap]'} />

      <Row>
        <Cards title="Profile 2020" linkref="/portfolio2020" />
        <Cards title="Music Zero" linkref="/music-zero" />
        <Cards title="Landing Page" linkref="/b4-landing-page" />
        <Cards title="Blank Card 2" linkref="#" />
        <Cards title="Blank Card 3" linkref="#" />
        <Cards title="Blank Card 4" linkref="#" />
        <Cards title="Blank Card 5" linkref="#" />
      </Row>
    </Container>
  )
}

export default BootsrapFour

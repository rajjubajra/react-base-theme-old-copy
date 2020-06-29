import React from 'react'
import Container from 'react-bootstrap/Container';
import { useSelector } from 'react-redux';
import Headers from '../headers/Header';
import ColourMode from '../colourMode/ColourMode';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailNTel from '../address/EmailNTel';

function Aboutus() {

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);



  return (
    <Container fluid className="music-zero">
      <div className={colorMode}>
        <Headers />
        <ColourMode />
        <Container className="music-zero" fluid >
          <Row>
            <Col lg={8}>
              <h1>About us</h1>
              <h3>Ipsum, dolor sit amet consectetur adipisicing elit. Odit esse autem officia. Repellat sed animi reprehenderit molestias blanditiis, amet perspiciatis dignissimos totam voluptatibus iure minima architecto rerum officiis asperiores quam. </h3>

              <p className="mt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit esse autem officia. Repellat sed animi reprehenderit molestias blanditiis, amet perspiciatis dignissimos totam voluptatibus iure minima architecto rerum officiis asperiores quam. Opsum dolor sit amet consectetur adipisicing elit. Architecto debitis atque porro. Neque quas eos deleniti? Voluptatum eos quasi enim! Perspiciatis neque cum maxime vero accusantium harum vitae enim repellendus. Trem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eum, corrupti nam odio, natus explicabo, deleniti at consectetur doloribus facilis laborum voluptatibus beatae repudiandae dolore eaque. Magni nemo pariatur quis.</p>
            </Col>
          </Row>
          <Row>
            <EmailNTel />

          </Row>




        </Container>

      </div>
    </Container>
  )
}

export default Aboutus

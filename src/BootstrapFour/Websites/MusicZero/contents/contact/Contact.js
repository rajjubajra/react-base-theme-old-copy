import React from 'react';
import { useSelector } from 'react-redux';
import Headers from '../headers/Header';
import ColourMode from '../colourMode/ColourMode';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import EmailNTel from '../address/EmailNTel';
import ContactForm from './ContactForm';

function Contact() {

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);

  return (
    <Container fluid className="music-zero">
      <div className={colorMode}>
        <Headers />
        <ColourMode />
        <Container>
          <Row className="mt-5 mb-5">
            <Col lg={8} xl={6}>
              <div className="mt-5 mb-5">
                <h1>Please send your enquiry</h1>
              </div>


              <ContactForm />

              <EmailNTel />
            </Col>
          </Row>
        </Container>
      </div>
    </Container>




  )
}

export default Contact

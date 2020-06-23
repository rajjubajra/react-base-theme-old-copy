import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AboutusContent from './AboutusContent';
import AboutusImage from './AboutusImage';
import { useInView } from 'react-intersection-observer';




function Aboutus() {
  const [ref, inView] = useInView({
    /* Optional options */
    //triggerOnce: true, //trigger animation first time only
    threshold: 0.5,
  })

  // console.log('ref', ref);
  console.log('inview', inView,);
  // console.log('entry', entry);
  return (

    <Container ref={ref}
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}>
      <Row>
        <Col lg={6} md={12} sm={12}>
          <div className={inView ? 'img-visible' : 'img-invisible'}>
            <AboutusImage />
          </div>
        </Col>
        <Col lg={6} md={12} sm={12} className="d-flex justify-content-center">
          <div className={inView ? 'text-visible' : 'text-invisible'}>
            <AboutusContent />
          </div>
        </Col>
      </Row>
    </Container>


  )
}

export default Aboutus

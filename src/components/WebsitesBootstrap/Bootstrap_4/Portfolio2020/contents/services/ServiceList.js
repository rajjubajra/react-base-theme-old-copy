import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import ServiceItem from './ServiceItem';
import Img_service_01 from '../../../../../../images/Portfolio2020/service_01.svg';
import Img_service_02 from '../../../../../../images/Portfolio2020/service_02.svg';
import Img_service_03 from '../../../../../../images/Portfolio2020/service_03.svg';

function ServiceList() {
  return (
    <Container>
      <Row>
        <ServiceItem img={Img_service_01} alt="Service 1" />
        <ServiceItem img={Img_service_02} alt="Service 2" />
        <ServiceItem img={Img_service_03} alt="Service 1" />
      </Row>
    </Container>
  )
}

export default ServiceList

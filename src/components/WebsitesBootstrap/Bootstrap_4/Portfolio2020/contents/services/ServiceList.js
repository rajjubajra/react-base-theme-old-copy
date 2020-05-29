import React from 'react'

import ServiceItem from './ServiceItem';
import CardDeck from 'react-bootstrap/CardDeck';
import Img_service_01 from '../../../../../../images/Portfolio2020/service_01.svg';
import Img_service_02 from '../../../../../../images/Portfolio2020/service_02.svg';
import Img_service_03 from '../../../../../../images/Portfolio2020/service_03.svg';

function ServiceList() {
  return (
    <CardDeck>
      <ServiceItem img={Img_service_01} alt="Service 1" />
      <ServiceItem img={Img_service_02} alt="Service 2" />
      <ServiceItem img={Img_service_03} alt="Service 1" />
    </CardDeck>
  )
}

export default ServiceList

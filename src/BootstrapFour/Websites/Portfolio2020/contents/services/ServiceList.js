import React from 'react'
import ServiceItem from './ServiceItem';
import CardDeck from 'react-bootstrap/CardDeck';

import Img_service_01 from '../../../../../images/Portfolio2020/service_01.svg';
import Img_service_02 from '../../../../../images/Portfolio2020/service_02.svg';
import Img_service_03 from '../../../../../images/Portfolio2020/service_03.svg';


const data = [
  {
    id: 1,
    title: "Lorem ipsum dolor",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione est accusantium dolorem iure aspernatur autem architecto a, asperiores consequuntur sint qui! Assumenda, cupiditate molestias? Iusto, illum! Possimus, omnis commodi!",
    image: Img_service_01,
    imgAlert: 'Service 1'
  },
  {
    id: 2,
    title: "Consectetur",
    text: "Consectetur, adipisicing elit. Corrupti ratione est accusantium dolorem iure aspernatur autem architecto a, asperiores consequuntur sint qui! Assumenda, cupiditate molestias? Iusto, illum! Possimus, omnis commodi!",
    image: Img_service_02,
    imgAlert: 'Service 2'
  },
  {
    id: 3,
    title: "Assumenda ipsum",
    text: "Assumenda ipsum dolor sit amet consectetur, adipisicing elit. Corrupti ratione est accusantium dolorem iure aspernatur autem architecto a, asperiores consequuntur sint qui! Assumenda, cupiditate molestias? Iusto, illum! Possimus, omnis commodi!",
    image: Img_service_03,
    imgAlert: 'Service 3'
  },
]



function ServiceList(props) {
  let delay = 0;

  return (
    <CardDeck>
      {
        data.map((item, index) => {
          return <ServiceItem
            key={index}
            img={item.image}
            title={item.title}
            text={item.text}
            alt={item.imgAlert}
            delay={++delay}
            cssclass={props.css_class}
          />
        })
      }
    </CardDeck>
  )
}

export default ServiceList

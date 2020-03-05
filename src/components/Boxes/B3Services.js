import React from 'react';
import B3Service from './B3Service';
import uuid from 'uuid/v1';

const jsonOBject = [
  {
    title: "Services",
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit optio debitis impedit doloremque, a deleniti dolor veritatis modi!"
  },
  {
    title: "Features",
    text: "Ipsum dolor sit amet, consectetur adipisicing elit. Fugit optio debitis impedit doloremque, a deleniti dolor veritatis modi!"
  },
  {
    title: "Contact",
    text: "consectetur adipisicing elit. Fugit optio debitis impedit doloremque, a deleniti veritatis modi!"
  },
]

const services = jsonOBject.map(item => {
  return <B3Service title={item.title} text={item.text} key={uuid()} />
})

const B3Services = () => {
  return (
    <>
      <div className="ref">b3services.js and b3service.js</div>
      <div className="b3services">
        <h2>B3Services</h2>
        <div className="services">
          {services}
        </div>
      </div>
    </>
  )
}

export default B3Services

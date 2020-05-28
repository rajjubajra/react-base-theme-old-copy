import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import CarouselItem from './CarouselItem'
import Portrait01 from '../../../../../../images/portrait/portrait01.jpg';
import Portrait02 from '../../../../../../images/portrait/portrait02.jpg';
import Portrait03 from '../../../../../../images/portrait/portrait03.jpg';
import Portrait04 from '../../../../../../images/portrait/portrait04.jpg';

function Carousel() {
  return (
    <Container className="carousel py-lg-5">
      <Row>
        <CarouselItem
          img={Portrait01}
          alt="Client one"
          cleintName="John Martin"
          reviewText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt."
        />
        <CarouselItem
          img={Portrait02}
          alt="Client Two"
          cleintName="Martin Hall"
          reviewText="Git amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati Lorem ipsum dolor, corrupti deserunt."
        />
        <CarouselItem
          img={Portrait03}
          alt="Client Three"
          cleintName="Joe Tyler"
          reviewText="Adipisicing elit. Quidem architecto consequuntur ratione, obcaecati Git amet consectetur Lorem ipsum dolor, corrupti deserunt."
        />
        <CarouselItem
          img={Portrait04}
          alt="Client Four"
          cleintName="Harry Jackson"
          reviewText="Quidem architecto consequuntur ratione, obcaecati Git amet consectetur Lorem ipsum dolor, Adipisicing elit. corrupti deserunt."
        />

      </Row>
    </Container>
  )
}

export default Carousel

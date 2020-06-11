import React, { useState, useEffect } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import MultiItem02 from './MultiItem02'
import Portrait01 from '../../../images/portrait/portrait01.jpg';
import Portrait02 from '../../../images/portrait/portrait02.jpg';
import Portrait03 from '../../../images/portrait/portrait03.jpg';
import Portrait04 from '../../../images/portrait/portrait04.jpg';
import Portrait05 from '../../../images/portrait/portrait05.jpg';
import Portrait06 from '../../../images/portrait/portrait06.jpg';



const data = [
  {
    id: 1,
    img: Portrait01,
    alt: "Client one",
    clientName: "John Martin",
    reviewText: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati corrupti deserunt."
  },
  {
    id: 2,
    img: Portrait02,
    alt: "Client Two",
    clientName: "Martin Hall",
    reviewText: "Git amet consectetur adipisicing elit. Quidem architecto consequuntur ratione, obcaecati Lorem ipsum dolor, corrupti deserunt."
  },
  {
    id: 3,
    img: Portrait03,
    alt: "Client Three",
    clientName: "Joe Tyler",
    reviewText: "Adipisicing elit. Quidem architecto consequuntur ratione, obcaecati Git amet consectetur Lorem ipsum dolor, corrupti deserunt."
  },
  {
    id: 4,
    img: Portrait04,
    alt: "Client Four",
    clientName: "Harry Jackson",
    reviewText: "Quidem architecto consequuntur ratione, obcaecati Git amet consectetur Lorem ipsum dolor, Adipisicing elit. corrupti deserunt."
  },
  {
    id: 5,
    img: Portrait05,
    alt: "Client Five",
    clientName: "Harry Jackson",
    reviewText: "Quidem architecto consequuntur ratione, obcaecati Git amet consectetur Lorem ipsum dolor, Adipisicing elit. corrupti deserunt."
  },
  {
    id: 6,
    img: Portrait06,
    alt: "Client Six",
    clientName: "Harry Jackson",
    reviewText: "Quidem architecto consequuntur ratione, obcaecati Git amet consectetur Lorem ipsum dolor, Adipisicing elit. corrupti deserunt."
  }

]

function MultiItems02() {
  const [slide, setSlide] = useState(1);


  useEffect(() => {

    const dataLength = data.length;
    let counter = 1;

    setInterval(function () {
      counter += 1;
      setSlide(counter);
      if (counter === dataLength) { return counter = 1 }
    }, 5000)

  }, [])

  console.log("SLIDE ID", slide, "---", data.length);

  function showNextSlide(slide, length) {
    slide === length ? setSlide(1) : setSlide(slide + 1);
  }
  function showPrevSlide(slide, length) {
    slide === 1 ? setSlide(length) : setSlide(slide - 1)
  }



  return (
    <Container className="multi-item-02 py-lg-5">
      <Row>
        <h2>Mulit Images 02</h2>
      </Row>
      <Row style={{
        display: "flex",
        justifyContent: "center",
        position: "relative"
      }}>
        <span className="before" onClick={() => showPrevSlide(slide, data.length)}></span>
        {
          data.map((item, index) => {
            return (
              <MultiItem02
                key={index}
                img={item.img}
                alt={item.alt}
                clientName={item.clientName}
                reviewText={item.reviewText}
                slide={slide}
                id={item.id}
                dataLength={data.length}
              />
            )
          })
        }
        <span className="after" onClick={() => showNextSlide(slide, data.length)}></span>
      </Row>
    </Container>
  )
}

export default MultiItems02;

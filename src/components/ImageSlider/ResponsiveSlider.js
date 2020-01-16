import React, { useState, useEffect } from 'react'
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const images = [
  {
    id: 1,
    img: 'slider_purchase',
    desc: 'Image Zero One',
    css: 'fadeIn'
  },
  {
    id: 2,
    img: 'slider_rock',
    desc: 'Image Zero two',
    css: 'fadeIn'
  },
  {
    id: 3,
    img: 'slider_team',
    desc: 'Image Zero three',
    css: 'fadeIn1'
  },
  {
    id: 4,
    img: 'slider_learn',
    desc: 'Image Zero four',
    css: 'fadeIn'
  },
  {
    id: 5,
    img: 'slider_rock',
    desc: 'Image Zero five',
    css: 'fadeIn1'
  }
]



const ResponsiveSlider = () => {

  const [seconds, setSeconds] = useState(0);
  //const [dotArr, setDotArr] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(
        seconds => seconds >= images.length - 1 ? 0 : seconds + 1)
    }, 6000);
    return () => clearInterval(interval);
  }, []);



  function nextFrame() {
    if (seconds >= images.length - 1 || seconds === undefined) {
      setSeconds(0)
    } else {
      setSeconds(seconds + 1);
    }
  }
  function prevFrame() {
    if (seconds === 0 || seconds === undefined) {
      setSeconds(4)
    } else {
      setSeconds(seconds - 1);
    }
  }



  return (
    <>
      <div className="ref">ResponsiveSlider.js</div>
      <h1>Responseive Image Slider</h1>
      <div className="responsiveslider">
        <h1>{seconds}</h1>
        <div className="carousel">
          <div className="carousel-images">
            <img
              src={require(`../../images/${images[seconds === undefined ? 0 : seconds].img}.jpg`)} alt="slide" />
          </div>
        </div>
        <div
          className="next"
          onClick={nextFrame}><FontAwesomeIcon icon={faAngleRight} />  </div>
        <div
          className="prev"
          onClick={prevFrame}><FontAwesomeIcon icon={faAngleLeft} /> </div>
        {/* { console.log(seconds)} */}
      </div>
    </>
  )
}

export default ResponsiveSlider

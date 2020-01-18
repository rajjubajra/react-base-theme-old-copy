import React from 'react'
import ResponsiveSlider from './ResponsiveSlider'
import Carousel from './Carousel'
import CarasouelWithText from './CarasouelWithText'
import ScrollOnClick from './ScrollOnClick'


const ImageSlider = () => {
  return (
    <div>
      <h1>Image Slider</h1>
      <ResponsiveSlider />
      <br />
      <Carousel />
      <br />
      <CarasouelWithText />
      <br />
      <ScrollOnClick />

    </div>
  )
}

export default ImageSlider

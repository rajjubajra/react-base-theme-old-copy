import React from 'react'
import ResponsiveSlider from './ResponsiveSlider'
import Carousel from './Carousel'
import CarasouelWithText from './CarasouelWithText'


const ImageSlider = () => {
  return (
    <div>
      <h1>Image Slider</h1>
      <ResponsiveSlider />
      <br />
      <Carousel />
      <br />
      <CarasouelWithText />

    </div>
  )
}

export default ImageSlider

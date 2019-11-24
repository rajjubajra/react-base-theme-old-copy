import React from 'react'
import B3Image from './B3Image'

const B3images = () => {

  const jsonObject = [
    {img: '../images/b3image-1.jps'},
    {img: '../images/b3image-2.jps'},
    {img: '../images/b3image-3.jps'},
  ]


  return (
    <div className="b3images">
      <B3Image />
      <B3Image />
      <B3Image />
    </div>
  )
}

export default B3images

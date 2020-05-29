import React from 'react'
import SmokeText from './SmokeText'
import Rotation from './Rotation'
import Circle from './Circle'

const Animation = () => {
  const page = {
    width: '100%',
    height: '100vh',
    position: "relative",
  }
  return (
    <div>
      <h2>Animation</h2>
      <div style={page}>
        <SmokeText />
      </div>
      <div style={page}>
        <Rotation />
      </div>
      <div style={page}>
        <Circle />
      </div>
    </div>
  )
}

export default Animation

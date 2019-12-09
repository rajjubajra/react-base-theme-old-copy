import React from 'react'
import VideoHeadlinButton from './VideoHeadlinButton'
import CTAwithImage from './CTAwithImage'
import TwoColumnCTA from './TwoColumnCTA'
import CTALargImage from './CTALargImage'

const CallToAction = () => {
  const page = {
    width: '100%',
    minHeight: '100vh',
    position: 'relative',
    outline: '1px solid #ccc',
    margin: '50px 0px',
  }
  return (
    <div>
      <h1>Call to Action</h1>
      <div style={page}>
        <VideoHeadlinButton />
      </div>
      <div style={page}>
        <CTAwithImage />
      </div>
      <div style={page}>
        <TwoColumnCTA />
      </div>
      <div style={page}>
        <CTALargImage />
      </div>
      

    </div>
  )
}

export default CallToAction

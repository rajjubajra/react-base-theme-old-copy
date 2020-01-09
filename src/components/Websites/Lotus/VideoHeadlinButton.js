import React from 'react'
import videoClip from '../../../video/people.mp4'

const VideoHeadlinButton = () => {


  return (
    <>
      <div className="videoHealineButton" >
        <video style={{ width: '100%', height: '100%' }} loop autoPlay>
          <source src={videoClip} type="video/mp4" />
          Your browser does not support the video tag.
      </video>
        <div className="text">
          <h1>Climate change</h1>
          <p>Climate change awareness mission</p>
          <button className="btn">Join Now</button>
        </div>
      </div>
    </>

  )
}

export default VideoHeadlinButton


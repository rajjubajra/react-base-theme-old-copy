import React from 'react'
import videoClip from '../../video/people.mp4'

const VideoHeadlinButton = () => {
 
 
  return (
    <div className="videoHealineButton" >

      <video style={{width: '100%', height: '100%'}} loop autoPlay>
                <source src={videoClip} type="video/mp4" />
                Your browser does not support the video tag.
      </video>
      <div className="text">
          <div><h2>Logo</h2></div>
          <h1>Join our climate change mission Create Awareness</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iste quis deserunt pariatur quod impedit fugiat non quaerat soluta beatae necessitatibus quibusdam facilis repudiandae fuga laboriosam maxime, dolorum doloremque sed.</p>
          <button className="btn">Join Now</button>
        </div>
    </div>
     
  
  )
}

export default VideoHeadlinButton


{
  /**
   *  <div className="text">
          <div>Logo</div>
          <h1>Join our climate change mission Create Awareness</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iste quis deserunt pariatur quod impedit fugiat non quaerat soluta beatae necessitatibus quibusdam facilis repudiandae fuga laboriosam maxime, dolorum doloremque sed.</p>
          <button className="btn-large-wide">Join Now</button>
        </div>
   */
}
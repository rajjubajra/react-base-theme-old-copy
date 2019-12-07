import React from 'react'
import imgMeeting from '../../images/b3card-3.jpg';

const TwoColumnCTA = () => {
  return (
    <div className="twocolumncta">
      <div className="text">
          <h1>Our Team</h1>
          <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet similique error magni aliquid, magnam, obcaecati at totam ducimus nesciunt veritatis voluptatem quae modi maiores ipsum voluptas sequi assumenda mollitia aspernatur.</p>
          </div>
          <div>
            <button className="btn">Learn More</button>
          </div>
          
      </div>
      <div className="image-block">
        <img src={imgMeeting} alt="meeting-alt" />
      </div>
      
    </div>
  )
}

export default TwoColumnCTA

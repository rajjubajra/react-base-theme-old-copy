import React from 'react'
import { Link } from 'react-router-dom';
import facebook from '../../../../../../images/social-media/drw-facebook.png';
import twitter from '../../../../../../images/social-media/drw-twitter.png';
import youtube from '../../../../../../images/social-media/drw-youtube.png';
import linkedIn from '../../../../../../images/social-media/drw-linkedIn.png';

const SocialMediaLanPasaa = () => {
  return (
    <div className="socialmedia-lanpasaa">
      <div className="title">
        <p>follow us</p>
      </div>
      <div className="socialmedia">
        <span className="facebook">
          <Link to="#">
            <img src={facebook} alt="facebook" />
          </Link>
        </span>
        <span className="twitter">
          <Link to="#">
            <img src={twitter} alt="twitter" />
          </Link>
        </span>
        <span className="youtube">
          <Link to="#">
            <img src={youtube} alt="youtube" />
          </Link>
        </span>
        <span className="linkedIn">
          <Link to="#">
            <img src={linkedIn} alt="linkedin" />
          </Link>
        </span>
      </div>
    </div>
  )
}

export default SocialMediaLanPasaa

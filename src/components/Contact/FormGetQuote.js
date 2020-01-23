import React from 'react'
import {Link} from 'react-router-dom';
import facebook from '../../images/social-media/drw-facebook.png';
import twitter from '../../images/social-media/drw-twitter.png';
import youtube from '../../images/social-media/drw-youtube.png';
import linkedIn from '../../images/social-media/drw-linkedIn.png';


const FormGetQuote = () => {
  return (
    <>
    <div className="ref">FormGetQuote.js</div> 

    <div className="form-getquote">

      <div className="image">
        <h1>Image</h1>
      </div>

      <div className="contact">
        <h1>Contact</h1>
        <p>Contact us for the quote.</p>
        <div className="address">
          <div>
            <p>Address</p>
            <p>100 Hundred Road, PO99CO89, UK</p>
          </div>
          <div>
            <p>Tel</p>
            <p>00 00 0000 0000 000</p>
          </div>
        </div>
      </div>

      <div className="quote">   
      <h1>Get Quote</h1>    
          <form action="">
            <div className="firstname">
              <label htmlFor="name">First Name</label>
              <input  type="text" name="firstname" id="" placeholder="First Name" />
            </div>
            <div className="lastname">
              <label htmlFor="lastname">Last Name</label>
              <input  type="text" name="lastname" id="" placeholder="Last Name"/>
            </div>
            <div className="phone">
              <label htmlFor="phone">Phone</label>
              <input  type="text" name="phone" id="" placeholder="Phone" />
            </div>
            <div className="email">
              <label htmlFor="Email">Email</label>
              <input  type="email" name="email" id="" placeholder="Email" />
            </div>
            <div className="text">
              <label htmlFor="message">Message</label>
              <textarea  name="text" id="" cols="30" rows="10" placeholder="Message"></textarea>
            </div>
            <div className="button">
              <p><button type="submit" className="btn-small-wide" >Submit</button></p>
            </div>
          </form> 
      </div>

      <div className="followus">
        <h1 className="title">follow us</h1>
        <div className="social">
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

    </div>
    </>
  )
}

export default FormGetQuote

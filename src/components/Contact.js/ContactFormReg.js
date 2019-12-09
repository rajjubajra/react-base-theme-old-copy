import React from 'react'

const ContactFormReg = () => {
  return (
    <div className="contactFormReg">
      <h2>Contact Form: </h2>
      <form action="">
        <div className="name">
          <input  type="text" name="name" id=""/>
        </div>
        <div className="email">
          <input  type="email" name="email" id=""/>
        </div>
        <div className="text">
          <textarea  name="text" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="button">
          <input className="btn" type="submit" name="submit" value="submit" />
        </div>
      </form>
    </div>
  )
}

export default ContactFormReg

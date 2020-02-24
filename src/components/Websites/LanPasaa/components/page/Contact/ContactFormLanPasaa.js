import React from 'react'

const FormDetails = () => {
  return (
    <div className="contactform-lanpasaa">
      <h2>Contact: </h2>
      <form action="">
        <div className="firstname">
          <label htmlFor="name">First Name</label>
          <input type="text" name="firstname" id="" />
        </div>
        <div className="lastname">
          <label htmlFor="lastname">Last Name</label>
          <input type="text" name="lastname" id="" />
        </div>
        <div className="phone">
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="" />
        </div>
        <div className="email">
          <label htmlFor="Email">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="text">
          <label htmlFor="message">Message</label>
          <textarea name="text" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="button">
          <button type="submit" className="btn" >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FormDetails

import React from 'react'


const FormInBox = () => {
  return (
    <div className="forminbox">
    <div className="ref">FormInBox.js</div>  
       <div className="title"><h2>Contact: </h2></div>
      <form action="">
        <div className="name">
          <label htmlFor="name">Name</label>
          <input  type="text" name="name" id=""/>
        </div>
        <div className="email">
          <label htmlFor="Email">Email</label>
          <input  type="email" name="email" id=""/>
        </div>
        <div className="text">
          <label htmlFor="message">Message</label>
          <textarea  name="text" id="" cols="30" rows="10"></textarea>
        </div>
        <div className="button">
          <button type="submit" className="btn" >Submit</button>
        </div>
      </form>
    </div>
  )
}

export default FormInBox

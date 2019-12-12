import React from 'react'

const FormRegular = () => {
  return (
    <>
    <div className="ref">FormRegular.js</div>
    <div className="formregular">  
      <h2>Contact Form: </h2>
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
    </>
  )
}

export default FormRegular

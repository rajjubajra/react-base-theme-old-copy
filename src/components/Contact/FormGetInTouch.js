import React from 'react'

const FormGetInTouch = () => {
  return (
    <>
    <div className="ref">FormGetInTouch.js</div>

    <div className="form-getin-touch"> 

      <div className="info-block">

        <div className="title">
          <h1>Get in</h1>
          <h1>Touch</h1>
        </div>
        

        <div className="tel">
          <h3>Tel: 00 55 8899 0000</h3>
        </div>


        <div className="address">
          <p>289 Street Road, City Name, PostCode, UK </p>
        </div>

        <div className="dept-name">
          <p>Customer Service</p>
        </div>
      
      
      
      </div> 


      <div className="form-block">

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


     
    </div>
    </>
  )
}

export default FormGetInTouch

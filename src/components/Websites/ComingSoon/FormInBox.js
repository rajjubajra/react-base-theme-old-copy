import React, { useState, useEffect } from 'react';
import axios from 'axios';







const FormInBox = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState('');




  function postContact(evn) {
    evn.preventDefault();

    axios.post({
      method: 'POST',
      url: `http://yellow-website.com/d8.yellow-website.com/jsonapi/contact_form/contact_form/6dfd8a4c-987c-4f06-aefa-7c14e37e5019`,
      data: {
        name: name,
        email: email,
        message: message
      }
    })
      .then((res) => {
        setData(res.data);

      })
      .catch(error => {
        console.log("AXIOS ERROR: ", error);
      })

    console.log("name", name, "email", email, "message", message)
    console.log("data", data);
  }











  return (
    <>
      <div>Post data {data}</div>
      <div className="forminbox" onSubmit={(evn) => postContact(evn)}>
        <div className="title"><h2>Contact: </h2></div>
        <form action="">
          <div className="name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id=""
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="email">
            <label htmlFor="Email">Email</label>
            <input
              type="email"
              name="email"
              id=""
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="text">
            <label htmlFor="message">Message</label>
            <textarea
              name="text"
              id="" cols="30"
              rows="10"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            ></textarea>
          </div>
          <div className="button">
            <button type="submit" className="btn" >Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default FormInBox

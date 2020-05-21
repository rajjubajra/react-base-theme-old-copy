import React, { useState, useEffect } from 'react';
import axios from 'axios';




const FormInBox = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [data, setData] = useState('');


  console.log("POST DATA? : ", data);
  function postContact(evn) {
    evn.preventDefault();

    const config = {
      headers: {
        'Accept': 'application/vnd.api+json',
        'Content-Type': 'application/vnd.api+json',
        'Authorization': 'Basic YXBpOmFwaQ=='
      }
    }

    // axios({
    //   method: 'POST',
    //   url: 'https://www.yellow-website.com/d8.yellow-website.com/jsonapi/contact_message/message_me',
    //   data: {
    //     name: name,
    //     email: email,
    //     message: message
    //   },
    //   headers: {
    //     'Accept': 'application/vnd.api+json',
    //     'Content-Type': 'application/vnd.api+json',
    //   }
    // })


    axios.post('https://www.yellow-website.com/d8.yellow-website.com/jsonapi/webform_submission/message_me', {
      "data": {
        "webform_id": {
          "target_id": "message_me"
        },
        "mobile_number": [{ "value": "123456789" }],
        "name": [{ "value": "Test" }],
      }
    }, config)
      .then((res) => {
        setData(res.data);
        console.log("RESULT: ", res);
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
      <div>{data}</div>
      <div className="forminbox" onSubmit={(evn) => postContact(evn)}>
        <div className="title"></div>
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

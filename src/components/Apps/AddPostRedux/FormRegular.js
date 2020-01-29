import React, { useState } from 'react'
import email_red_circle from '../../../images/email-red-circle.png'

const FormRegular = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  }
  const onChangeBody = (e) => {
    setBody(e.target.value);
  }
  console.log('title', title, 'body', body);

  const onSubmit = (e) => {
    e.preventDefault();

    const post = {
      title: title,
      body: body
    }
    console.log('psot ?', post);

    fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(post)
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }

  return (
    <>
      <div className="formregular">
        <h2>Contact Form: </h2>
        <form onSubmit={onSubmit} action="">
          <div className="name">
            <label htmlFor="name">Title</label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={onChangeTitle}
            />
          </div>
          <div className="text">
            <label htmlFor="message">Body</label>
            <textarea
              name="body"
              cols="30" rows="10"
              value={body}
              onChange={onChangeBody}
            ></textarea>
          </div>
          <div className="button">
            <button type="submit" className="btn" >Submit</button>
          </div>
        </form>
        <div className="email-background"><img src={email_red_circle} alt="background" /></div>
      </div>
    </>
  )
}

export default FormRegular

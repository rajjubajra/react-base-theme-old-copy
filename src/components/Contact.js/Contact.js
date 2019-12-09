import React from 'react';
import ContactFormReg from './ContactFormReg';


const Contact = () => {
  const page = {
    width: '100%',
    minHeight: '100vh',
    display: "block",
    position: "relative",
    backgroundColor: '#eee'
  }
  return (
    <div>
      <h1>Contact Form</h1>
      <div style={page}>
        <ContactFormReg />
      </div>
    </div>
  )
}

export default Contact

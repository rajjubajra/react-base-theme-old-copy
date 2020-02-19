import React from 'react';
import FormRegular from './FormRegular';
import FormWide from './FormWide';
import FormDetails from './FormDetails';
import FormInBox from './FormInBox';
import FormGetInTouch from './FormGetInTouch';
import FormGetQuote from './FormGetQuote';
import LotusContactPage from './LotusContactPage';
import ContactWheat from './ContactWheat';
import SubscriptionWheat from './SubscriptionWheat';
import ContactLanPasaa from './ContactLanPasaa';


const Contact = () => {
  const page = {
    width: '100%',
    minHeight: '100vh',
    display: "block",
    position: "relative",

  }
  return (
    <div>
      <h1>Contact Form</h1>
      <div style={page}>
        <FormRegular />
      </div>
      <div style={page}>
        <FormWide />
      </div>
      <div style={page}>
        <FormDetails />
      </div>
      <div style={page}>
        <FormInBox />
      </div>
      <div style={page}>
        <FormGetInTouch />
      </div>
      <div style={page}>
        <FormGetQuote />
      </div>
      <div style={page}>
        <LotusContactPage />
      </div>
      <div style={page}>
        <ContactWheat />
      </div>
      <div style={page}>
        <SubscriptionWheat />
      </div>
      <div style={page}>
        <ContactLanPasaa />
      </div>
    </div>
  )
}

export default Contact

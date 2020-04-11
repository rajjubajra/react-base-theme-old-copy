import React from 'react'
import NavLotus from './NavLotus';
import FAQs from './FAQs';
import TwoColumnContact from './TwoColumnContact';
import FormInBox from './FormInBox';


const PageLotusFAQ = () => {
  return (
    <>
      <div className="lotus">
        <div className="lotus-nav">
          <NavLotus />
        </div>
        <div className="lotus-body">
          <div className="faq-page">
            <FAQs />
          </div>
        </div>
        <div className="divider"></div>
        <div className="divider"></div>
        <h2 className="faq-form-title">How can we help you?</h2>
        <FormInBox />
        <div className="divider"></div>
        <div className="divider"></div>
        <TwoColumnContact />
      </div>
    </>
  )
}

export default PageLotusFAQ

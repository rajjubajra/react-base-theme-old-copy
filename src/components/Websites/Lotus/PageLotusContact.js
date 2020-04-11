import React from 'react'
import NavLotus from './NavLotus'
import TwoColumnContact from './TwoColumnContact'
import FormDetails from './FormDetails'

const PageLotusContact = () => {
  return (
    <>
      <div className="lotus">
        <div className="lotus-nav">
          <NavLotus />
        </div>
        <div className="lotus-body">
          <div className="contact-page">
            <div className="divider"></div>
            <h1>Contact</h1>
            <TwoColumnContact />
            <div className="divider"></div>
            <FormDetails />
            <div className="divider"></div>
            <div className="divider"></div>
          </div>
        </div>
      </div>

    </>
  )
}

export default PageLotusContact

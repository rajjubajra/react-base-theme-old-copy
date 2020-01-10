import React, { useState, useEffect } from 'react';
import FormInBox from './FormInBox';

const detail_address = [
  {
    id: 1,
    company: 'Lotus Company',
    address_line_1: 'Level 13, 2 Queen Streete',
    address_line_2: 'London. UK',
    tel: '+ 44 000 000 0000',
    email: 'replyme@example.com',
    info: 'Dolor sit amet consectetur adipisicing elit. Asperiores deleniti velit architecto maxime deserunt laudantium corrupti quos maiores quas dolor! Commodi',
    facebook: 'facebook',
    twitter: 'twitter',
    youtube: 'youtube'
  }
]

const LotusContactPage = () => {
  const [detailAddress, setDetailAddress] = useState('');
  useEffect(() => {
    setDetailAddress(detail_address.map(item => {
      return (
        <section key={item.id} >
          <div className="office">
            <h3>Office</h3>
            <h2>{item.company}</h2>
            <p>{item.address_line_1}</p>
            <p>{item.address_line_2}</p>
          </div>
          <div className="contact">
            <h3>Contact</h3>
            <h2>{item.tel}</h2>
            <h2>{item.email}</h2>
            <p>{item.info}</p>
          </div>
          <div className="social-media">
            <p>{item.facebook}</p>
            <p>{item.twitter}</p>
            <p>{item.youtube}</p>
          </div>
        </section>
      )
    }))
  }, [])
  return (
    <>
      <div className="ref">LotusContactPage.js</div>
      <div className="lotuscontactpage">
        <div className="detail-address">
          {detailAddress}
        </div>
        <div className="contact-form">
          <FormInBox />
        </div>
      </div>
    </>
  )
}

export default LotusContactPage

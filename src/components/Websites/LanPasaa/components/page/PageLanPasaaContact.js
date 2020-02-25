import React from 'react';
import ContactFormLanPasaa from './Contact/ContactFormLanPasaa';
import ContactLanPasaa from './Contact/ContactLanPasaa';
import SocialMediaLanPasaa from './Contact/SocialMediaLanPasaa';
import LanPasaaTitle from '../header/LanPasaaTitle';
import NavMainLanPasaa from '../nav/NavMainLanPasaa';

const PageLanPasaaContact = () => {

  return (
    <div className="lanpasaa">
      <LanPasaaTitle />
      <NavMainLanPasaa />

      <div className="contact-page">
        <div className="page-title">
          <h1>Contact</h1>
        </div>

        <div className="page-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et impedit porro omnis culpa, quam reprehenderit commodi nemo aut obcaecati maiores pariatur amet vero voluptates, quos nesciunt excepturi cupiditate itaque quia Lorem ipsum dolor sit amet consectetur adipisicing elit. Non fugit expedita error culpa atque id, laborum, optio neque unde, voluptatem cumque! Deleniti commodi unde temporibus.
          </p>
          <p>
            quidem laudantium obcaecati accusamus libero! Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, repellat praesentium adipisci numquam, architecto atque dolor debitis totam fugit animi laboriosam? Id quasi totam illo? Ad, sit expedita! Quibusdam, ullam.
          </p>
        </div>
        <div className="page-form">
          <ContactFormLanPasaa />
        </div>
        <div className="contact-detail">
          <ContactLanPasaa />
        </div>
        <div className="page-sl-media">
          <SocialMediaLanPasaa />
        </div>
      </div>

    </div>
  )
}

export default PageLanPasaaContact

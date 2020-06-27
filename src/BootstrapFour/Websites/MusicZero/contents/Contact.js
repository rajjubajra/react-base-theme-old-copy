import React from 'react'
import Container from 'react-bootstrap/Container';
import Headers from './headers/Header';
import ColourMode from './colourMode/ColourMode';


function Contact() {
  return (
    <Container className="music-zero" fluid >
      <div className={ColourMode}>
        <Headers />

        <main>
          <ColourMode />
          <section>
            <h1>Contact us</h1>
          </section>

        </main>
      </div>
    </Container>
  )
}

export default Contact

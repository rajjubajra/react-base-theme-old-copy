import React from 'react';
import ColourMode from './colourMode/ColourMode';
import { useSelector } from 'react-redux';
import Headers from './headers/Header';
import Container from 'react-bootstrap/Container';
import MusicCards from './musicCards/MusicCards';
import Text from './text/Text';






function Page() {

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);

  console.log(colorMode);


  return (
    <Container className="music-zero" fluid >
      <div className={colorMode}>
        <Headers />

        <main>
          <ColourMode />
          <section className="mt-2">
            <MusicCards />
          </section>

          <section className="mt-5">
            <Text />
          </section>

        </main>
      </div>
    </Container>

  )
}

export default Page

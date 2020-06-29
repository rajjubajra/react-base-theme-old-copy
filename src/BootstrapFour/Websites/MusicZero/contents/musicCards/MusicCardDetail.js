import React, { useEffect, useState } from 'react';
import ColourMode from '../colourMode/ColourMode';
import { useSelector } from 'react-redux';
import Headers from '../headers/Header';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import concert from '../../../../../../src/images/Music/concert00.jpg';
import music from '../../../../../../src/images/Music/music00.png';
import sheet from '../../../../../../src/images/Music/sheet00.jpg';
import string from '../../../../../../src/images/Music/string00.jpg';
import vinyl from '../../../../../../src/images/Music/vinyl00.jpg';
import audio from '../../../../../../src/images/Music/audio00.jpg';

import axios from 'axios';
import ListItem from './ListItem';
import PlayingTrack from './PlayingTrack';


const data = [
  {
    id: 1,
    img: concert,
    title: 'Live 2020'
  },
  {
    id: 2,
    img: music,
    title: 'Sounds',
  },
  {
    id: 3,
    img: sheet,
    title: 'Legands',
  },
  {
    id: 4,
    img: string,
    title: 'Guitar Man',
  },
  {
    id: 5,
    img: vinyl,
    title: 'Once upon a time'
  },
  {
    id: 6,
    img: audio,
    title: 'Voice of void'
  },

]

const trackUrl = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/1/top?limit=50';


function MusicCardDetail() {


  const [trackList, setTrackList] = useState([]);

  const colorMode = useSelector(state => state.reducerSelectColourMode.colourMode);

  useEffect(() => {
    axios({
      method: 'GET',
      url: trackUrl,
      headers: {
        'Accept': 'application/json'
      }
    })
      .then(res => setTrackList(res.data.data))
      .catch(err => console.log(err))
  }, [])

  console.log(trackList);

  return (
    <Container className="music-zero" fluid >
      <div className={colorMode}>
        <Headers />
        <ColourMode />
        <PlayingTrack />

        <img src={data[0].img} alt={data[0].title} />
        <Row>
          <Col lg={8}>

            {
              trackList.map(item => {
                return <div key={item.id}>
                  <ListItem
                    title={item.title}
                    preview={item.preview}
                    cover={item.album.cover_medium}
                    artist={item.artist.name}
                    album={item.album.title}
                  />
                </div>

              })
            }
          </Col>
        </Row>

      </div>
    </Container>
  )
}

export default MusicCardDetail

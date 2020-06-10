import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Title from '../global/Title';
import SocialMediaLinks from './SocialMediaLinks';
import './SocialMedia.scss';


function SocialMedia(props) {
  return (
    <Container>
      <Row className="justify-content-center">
        <Title title="Follow me" />
      </Row>
      <Row className="text-align-center">
        <SocialMediaLinks />
      </Row>
    </Container >
  )
}

export default SocialMedia

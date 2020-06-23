import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Title from '../global/Title';
import SocialMediaLinks from './SocialMediaLinks';
import './SocialMedia.scss';
// import CircleBackground from './CircleBackground';



function SocialMedia(props) {
  return (
    <Container style={{
      position: "relative",
      width: "100%",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <Row className="justify-content-center">
        <Title title="Follow me" />
      </Row>
      <Row className="text-align-center">
        <SocialMediaLinks />
        {/*
         width exceed 100% need correction
         <CircleBackground /> */}
      </Row>
    </Container >
  )
}

export default SocialMedia

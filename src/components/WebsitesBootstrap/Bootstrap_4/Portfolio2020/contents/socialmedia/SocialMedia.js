import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Title from '../global/Title';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Badge from 'react-bootstrap/Badge';


function SocialMedia(props) {
  return (
    <Container>
      <Row className="text-align-center">
        <Title title="Follow me" />
      </Row>
      <Row>
        <Badge variant="light"><Link href="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></Link></Badge>
        <Badge variant="light"><Link href="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></Link></Badge>
        <Badge variant="light"><FontAwesomeIcon icon={['fab', 'youtube']} /></Badge>
        <Badge variant="light"><Link href="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link></Badge>
        <Badge variant="light"><Link href="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Link></Badge>
      </Row>
    </Container >
  )
}

export default SocialMedia

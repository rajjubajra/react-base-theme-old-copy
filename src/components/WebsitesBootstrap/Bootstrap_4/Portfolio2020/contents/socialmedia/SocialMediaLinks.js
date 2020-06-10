import React from 'react'
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SocialMediaLinks() {
  return (
    <Col className="d-flex justify-content-center">
      <Badge>
        <Link to="#"><FontAwesomeIcon icon={['fab', 'facebook']} /></Link>
      </Badge>
      <Badge>
        <Link to="#"><FontAwesomeIcon icon={['fab', 'twitter']} /></Link>
      </Badge>
      <Badge>
        <Link to="#"><FontAwesomeIcon icon={['fab', 'youtube']} /></Link>
      </Badge>
      <Badge>
        <Link to="#"><FontAwesomeIcon icon={['fab', 'instagram']} /></Link>
      </Badge>
      <Badge>
        <Link to="#"><FontAwesomeIcon icon={['fab', 'linkedin']} /></Link>
      </Badge>
    </Col>
  )
}

export default SocialMediaLinks

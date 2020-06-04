import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ToolsText() {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

export default ToolsText

/**
 *   <div class="tool-text-area">
      <div class="d-flex flex-row years-area">
        <h2 class="p-3 years">10</h2>
        <h2>
          <span>Years</span>
          <span>Experience</span>
          <span>Working</span>
        </h2>
      </div>
      <div class="d-flex flex-row flex-wrap call-area">
        <span><FontAwesomeIcon className="m-2" icon={faPhone} /></span>
        <div class="call-now">
          <h4>Call Now</h4>
          <span class="font-roboto py-2">(+44)-000-000-0000</span>
        </div>
      </div>
      <div class="bg-panel"></div>
    </div>
 */
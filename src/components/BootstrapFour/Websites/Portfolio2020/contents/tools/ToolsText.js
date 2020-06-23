import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ToolsText() {
  const beforeContent = " Quam ollitia pariat";

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: [
          '.add-before:before {',
          '  content: "' + beforeContent + '";',
          'font-size: 2em;',
          ' text-align: center;',
          ' width: 100px;',
          ' height: 200px;',
          ' border: 1px solid #ccc;',
          ' position: absolute;',
          ' left: -30px;',
          ' background: #ccc;',

          '}'
        ].join('\n')
      }}></style>
      <Card>
        <Card.Body style={{ paddingLeft: "100px", position: "relative", minHeight: "350px" }} className="add-before">
          <Card.Title>Tools</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur possimus magni itaque, rerum nisi laboriosam eaque omnis! Sunt voluptates sint quam iusto mollitia pariatur, nisi possimus delectus quisquam aut quibusdam.
          </Card.Text>
          <Card.Text>
            <FontAwesomeIcon icon={faPhone} /> 4444 5555 6666
          </Card.Text>
          <Button variant="primary">Contact</Button>
        </Card.Body>
      </Card>
    </>
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
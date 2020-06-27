import React from 'react'
import { Navbar } from 'react-bootstrap';
import IconBackspace from '../../B4Icons/IconBackspace';

function TitleNNav(props) {
  return (
    <Navbar>
      <Navbar.Brand href="websites-bootstrap">{props.title}</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          <IconBackspace linkRef={props.href} />
        </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default TitleNNav

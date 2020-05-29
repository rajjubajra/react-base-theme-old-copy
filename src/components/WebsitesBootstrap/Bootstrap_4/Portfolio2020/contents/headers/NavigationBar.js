import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';


function NavigationBar() {

  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home">YW-Template</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="#portfolio2020-home">Home</Nav.Link>
          <Nav.Link href="#portfolio2020-about">About</Nav.Link>
          <Nav.Link href="#portfolio2020-services">Services</Nav.Link>
          <Nav.Link href="#portfolio2020-gallery">Gallery</Nav.Link>
          <Nav.Link href="#portfolio2020-pages">Pages</Nav.Link>
          <Nav.Link href="#portfolio2020-blog">Blog</Nav.Link>
          <Nav.Link href="#portfolio2020-contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar >
  )
}

export default NavigationBar

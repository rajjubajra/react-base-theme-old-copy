import React from 'react'
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function ContactForm() {
  return (
    <Form>
      <Form.Row>
        <Form.Group as={Col} controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="First Name" />
        </Form.Group>

        <Form.Group as={Col} controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" placeholder="Last Name" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} controlId="formEnquiry">
          <Form.Label>Enquiry</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder="Enquiry" />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
  )
}

export default ContactForm

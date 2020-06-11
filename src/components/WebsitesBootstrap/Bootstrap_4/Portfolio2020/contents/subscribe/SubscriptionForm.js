import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


function SubscriptionForm() {
  return (
    <Form>
      <Form.Row className="align-items-center">

        <Col xs="auto">
          <InputGroup className="mb-2">
            <InputGroup.Prepend>
              <InputGroup.Text>@</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl id="inlineFormInputGroup" placeholder="email address" />
          </InputGroup>
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2">
            Submit
      </Button>
        </Col>
      </Form.Row>
    </Form>
  )
}

export default SubscriptionForm

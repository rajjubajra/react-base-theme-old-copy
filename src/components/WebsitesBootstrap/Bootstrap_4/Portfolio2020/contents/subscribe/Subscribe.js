import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Title from '../global/Title';
import Text from '../global/Text';
import SubscriptionForm from './SubscriptionForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Subscribe() {
  return (
    <Container>
      <Row>
        <Col>
          <Card className="text-center" style={{ borderLeft: "0px", borderRight: "0px" }}>
            {/* <Card.Header>Subscription Form</Card.Header> */}
            <Card.Body>
              <Card.Title><Title title="Subscribe me" /></Card.Title>
              <Card.Text className="d-flex justify-content-center">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, consequuntur
              </Card.Text>
              <div className="d-flex justify-content-center">
                <SubscriptionForm />
              </div>
            </Card.Body>
            {/* <Card.Footer className="text-muted">
              -- // --<FontAwesomeIcon icon={['far', 'fa-envelope-open']} />
            </Card.Footer> */}
          </Card>
        </Col>
      </Row>
    </Container>

  )
}

export default Subscribe

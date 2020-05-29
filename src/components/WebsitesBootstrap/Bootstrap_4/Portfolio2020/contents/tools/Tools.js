import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Tool from './Tool';
import ToolsText from './ToolsText';
import logo_drupal from '../../../../../../images/Portfolio2020/logo_drupal_8.png';



function Tools() {
  return (
    <Container>
      <Row>
        <Col xl={6} lg={12} md={12}>
          <Row>
            <Tool logo={logo_drupal} alt="logo" />
            <Tool logo={logo_drupal} alt="logo" />
            <Tool logo={logo_drupal} alt="logo" />
            <Tool logo={logo_drupal} alt="logo" />
            <Tool logo={logo_drupal} alt="logo" />
            <Tool logo={logo_drupal} alt="logo" />
            <Tool logo={logo_drupal} alt="logo" />
            <Tool logo={logo_drupal} alt="logo" />
            <Tool logo={logo_drupal} alt="logo" />
          </Row>
        </Col>
        <Col xl={6} lg={12} md={12}>
          <Row>
            <ToolsText />
          </Row>
        </Col>
      </Row>
    </Container>
  )
}

export default Tools

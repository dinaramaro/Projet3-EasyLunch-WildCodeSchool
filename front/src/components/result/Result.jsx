import React from 'react';
import { Col, Row, Container } from 'reactstrap';
import Restaurants from './Restaurants';

const Result = () => (
  <Container>
    <Row>
      <Col xs="8">
        <Restaurants />
      </Col>
    </Row>

  </Container>
)

export default Result;

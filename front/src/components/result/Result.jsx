import React from 'react';
import './Result.scss';
import { Col, Row, Container } from 'reactstrap';
import Restaurants from './Restaurants';
import MapResult from '../../containers/result/MapResult';

const Result = () => (
  <Container fluid className="Result">
    <Row>
      <Col md={12} lg={8}>
        <Restaurants />
      </Col>
      <Col md={12} lg={4}>
        <MapResult />
      </Col>
    </Row>
  </Container>
);

export default Result;

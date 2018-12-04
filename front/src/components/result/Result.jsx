import React from 'react';
import './Result.scss';
import { Container, Row, Col } from 'reactstrap';
import Mapresult from '../../containers/result/Mapresult';


const Result = () => (
  <Container fluid className="Result">
    <Row>
      <Col md={12} lg={8}>
        Resultats
      </Col>
      <Col md={12} lg={4}>
        <Mapresult />
      </Col>
    </Row>
  </Container>
);

export default Result;

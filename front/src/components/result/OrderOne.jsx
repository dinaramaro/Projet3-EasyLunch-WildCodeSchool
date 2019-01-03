import React from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import RestoInfos from '../../containers/result/RestoInfos';
import InfoGe from '../../containers/result/InfoGe';
import FormOrder from '../../containers/result/FormOrder';


const OrderOne = () => (
  <Container fluid className="OrderOne">
    <Row>
      <Col sm={4}>
        <RestoInfos />
        <InfoGe />
      </Col>
      <Col sm={8}>
        <FormOrder />
        <Link to="/commande2"><Button>Continuer</Button></Link>
      </Col>
    </Row>
  </Container>
);

export default OrderOne;

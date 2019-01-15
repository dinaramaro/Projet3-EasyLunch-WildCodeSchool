import React from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import RestoInfos from '../../containers/result/RestoInfos';
import GeneralInformations from '../../containers/result/GeneralInformations';
import FormOrder from '../../containers/result/FormOrder';


const OrderPageOne = () => (
  <Container fluid className="OrderPageOne">
    <Row>
      <Col sm={4}>
        <RestoInfos />
        <GeneralInformations />
      </Col>
      <Col sm={8}>
        <FormOrder />
        <Link to="/commande-page2"><Button>Continuer</Button></Link>
      </Col>
    </Row>
  </Container>
);

export default OrderPageOne;

import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import RestoInfosParticipate from './RestoInfosParticipate';
import InfoGeParticipate from './InfosGeParticipate';
import OrderMenuParticipate from './OrderMenuParticipate';


const OrderPageTwoParticipate = () => (
  <Container fluid className="OrderPageTwo">
    <Row>
      <Col sm={4}>
        <RestoInfosParticipate />
        <InfoGeParticipate />
      </Col>
      <Col sm={8}>
        <OrderMenuParticipate />
      </Col>
    </Row>
  </Container>
);

function mstp(state) {
  return {
    menuResto: state.menuResto,
  };
}

export default connect(mstp)(OrderPageTwoParticipate);

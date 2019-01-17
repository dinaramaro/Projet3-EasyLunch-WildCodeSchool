import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import RestoInfos from '../result/RestoInfos';
import GeneralInformations from '../result/GeneralInformations';
import OrderMenuParticipate from './OrderMenuParticipate';


const OrderPageTwoParticipate = () => (
  <Container fluid className="OrderPageTwo">
    <Row>
      <Col sm={4}>
        <RestoInfos />
        <GeneralInformations />
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

import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import RestoInfos from './RestoInfos';
import GeneralInformations from './GeneralInformations';
import OrderMenu from './OrderMenu';


const OrderPageTwo = () => (
  <Container fluid className="OrderPageTwo">
    <Row>
      <Col sm={4}>
        <RestoInfos />
        <GeneralInformations />
      </Col>
      <Col sm={8}>
        <OrderMenu />
      </Col>
    </Row>
  </Container>
);

function mstp(state) {
  return {
    menuResto: state.menuResto,
  };
}

export default connect(mstp)(OrderPageTwo);

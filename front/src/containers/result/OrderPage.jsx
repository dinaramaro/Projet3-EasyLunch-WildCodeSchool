import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import RestoInfos from './RestoInfos';
import OrderMenu from './OrderMenu';
import FormOrder from './FormOrder';
import './OrderPage.scss';


const OrderPage = () => (
  <Container fluid className="OrderPage">
    <Row>
      <Col sm={3}>
        <RestoInfos />
      </Col>
      <Col sm={5}>
        <OrderMenu />
      </Col>
      <Col sm={4}>
        <FormOrder />
      </Col>
    </Row>
  </Container>
);

function mstp(state) {
  return {
    menuResto: state.menuResto,
  };
}

export default connect(mstp)(OrderPage);

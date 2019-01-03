import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import RestoInfos from './RestoInfos';
import InfoGe from './InfoGe';
import OrderMenu from './OrderMenu';


const OrderTwo = () => (
  <Container fluid className="OrderTwo">
    <Row>
      <Col sm={4}>
        <RestoInfos />
        <InfoGe />
      </Col>
      <Col sm={8}>
        <OrderMenu />
      </Col>
    </Row>
  </Container>
)

function mstp(state) {
  return {
    menuResto: state.menuResto,
  };
}

export default connect(mstp)(OrderTwo);

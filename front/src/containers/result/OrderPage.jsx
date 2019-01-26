import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import RestoInfos from './RestoInfos';
import OrderMenu from './OrderMenu';
import FormOrder from './FormOrder';
import './OrderPage.scss';


const OrderPage = ({ isLoadingStripe }) => {
  if (isLoadingStripe) {
    return (
      <Container className="text-center">
        <img src="/medias/eatstreet-loading.gif" alt="loading" />
        <h2>Autorisation de paiement en cours...</h2>
      </Container>
    );
  }

  return (
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
};

function mstp(state) {
  return {
    isLoadingStripe: state.stripeLoading.loading,
  };
}

export default connect(mstp)(OrderPage);

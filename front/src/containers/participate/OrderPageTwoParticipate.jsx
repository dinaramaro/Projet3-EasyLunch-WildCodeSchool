import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import GeneralInformations from '../result/GeneralInformations';
import PayOrderParticipate from './PayOrderParticipate';
import MyMeal from '../result/MyMeal';
import RestoInfos from '../result/RestoInfos';
import OrderMenuParticipate from './OrderMenuParticipate';


const OrderPageTwoParticipage = ({ isLoadingStripe }) => {
  if (isLoadingStripe) {
    return (
      <Container className="text-center">
        <img src="/medias/eatstreet-loading.gif" alt="loading" />
        <h2>Authorisation de paiement en cours...</h2>
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
          <OrderMenuParticipate />
        </Col>
        <Col sm={4}>
          <GeneralInformations />
          <MyMeal />
          <PayOrderParticipate />
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

export default connect(mstp)(OrderPageTwoParticipage);

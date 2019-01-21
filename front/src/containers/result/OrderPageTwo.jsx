import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import RestoInfos from './RestoInfos';
import GeneralInformations from './GeneralInformations';
import OrderMenu from './OrderMenu';


const OrderPageTwo = ({ isLoadingStripe }) => {
  if (isLoadingStripe) {
    return (
      <Container className="text-center">
        <img src="/medias/eatstreet-loading.gif" alt="loading" />
        <h2>Authorisation de paiement en cours...</h2>
      </Container>
    );
  }

  return (
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
};

function mstp(state) {
  return {
    isLoadingStripe: state.stripeLoading.loading,
  };
}

export default connect(mstp)(OrderPageTwo);

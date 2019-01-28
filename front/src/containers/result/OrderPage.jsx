import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
import RestoInfos from './RestoInfos';
import OrderMenu from './OrderMenu';
import FormOrder from './FormOrder';
import MyMeal from './MyMeal';
import PayOrder from './PayOrder';
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
      <h1 className="title">Faites votre choix</h1>
      <Row>
        <Col sm={3}>
          <Zoom>
            <RestoInfos />
          </Zoom>
        </Col>
        <Col sm={6}>
          <OrderMenu />
        </Col>
        <Col sm={3}>
          <Zoom>
            <FormOrder />
          </Zoom>
          <MyMeal />
          <PayOrder />
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

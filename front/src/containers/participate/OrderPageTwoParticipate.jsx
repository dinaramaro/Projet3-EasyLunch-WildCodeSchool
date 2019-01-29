import React from 'react';
import { connect } from 'react-redux';
import {
  Container, Row, Col,
} from 'reactstrap';
import Zoom from 'react-reveal/Zoom';
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
        <h2>Autorisation de paiement en cours...</h2>
      </Container>
    );
  }

  return (
    <div>
      <h1 className="title">Faites votre choix</h1>
      <Container fluid className="OrderPage">
        <Row>
          <Col sm={3}>
            <Zoom>
              <RestoInfos />
            </Zoom>
          </Col>
          <Col sm={5}>
            <OrderMenuParticipate />
          </Col>
          <Col sm={4}>
            <Zoom>
              <h3 className="title-card"><strong>Récapitulatif</strong></h3>
              <GeneralInformations />
              <MyMeal />
              <PayOrderParticipate />
            </Zoom>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

function mstp(state) {
  return {
    isLoadingStripe: state.stripeLoading.loading,
  };
}

export default connect(mstp)(OrderPageTwoParticipage);

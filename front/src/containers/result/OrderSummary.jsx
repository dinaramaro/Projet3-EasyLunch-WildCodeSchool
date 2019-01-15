import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import GeneralInformations from './GeneralInformations';
import RestoInfos from './RestoInfos';

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    const { menuResto: { resto: { restoInfos } } } = this.props;
    const { sendOrder: { sendOrder }} = this.props;
    return (
      <Container>
        <Row>
          <Col sm={8}>
            <h2>Récapitulatif de votre commande</h2>
            <RestoInfos />
            <GeneralInformations />
            <h2>Menu</h2>
            <p></p>
          </Col>
          <Col sm={4}>
            <p>
              {`Ta commande a bien été prise en compte et transmise au restaurant ${restoInfos.name}`}
            </p>
            <p>Invite tes collègues à te rejoindre en utilisant le code de partage.</p>
            <p>Code de partage : (code de partage)</p>
          </Col>
        </Row>

      </Container>
    )
  }

}

function mstp(state) {
  return {
    menuResto: state.menuResto,
    sendOrder: state.sendOrder,
    chooseByUser: state.chooseByUser,
  };
}

export default connect(mstp)(OrderSummary);

import React, { Component } from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import GeneralInformations from './GeneralInformations';
import RestoInfos from './RestoInfos';
import { initState } from '../../actions';

class OrderSummary extends Component {
  componentWillUnmount() {
    const { initState } = this.props;
    initState();
  }

  render() {
    const {
      menuResto: { resto: { restoInfos } },
      chooseByUser: { tabs },
      sendOrder: { sendOrder: { tableCommand } },
      sendOrder,
      getCode: { code },
      log: { user },
    } = this.props;

    if (tabs.length === 0) {
      return (
        <div>
          <Link to="/"><Button>VEUILLEZ CHOISIR VOTRE MENU</Button></Link>
        </div>
      );
    }

    return (
      <Container>
        <Row>
          <Col sm={8}>
            <RestoInfos />
            <GeneralInformations />
            <h2>Récapitulatif de votre commande</h2>
            <ul>
              {tabs.map((item) => {
                if (item.Plat !== undefined) {
                  return (
                    <li>{item.Plat}</li>
                  );
                } if (item.Dessert !== undefined) {
                  return (
                    <li>{item.Dessert}</li>
                  );
                } if (item.Boisson !== undefined) {
                  return (
                    <li>{item.Boisson}</li>
                  );
                }
                return (
                  <li>{item.Entrée}</li>
                );
              })
              }
            </ul>
            <p>{tableCommand.special !== undefined ? `Instructions spéciales : ${tableCommand.special}` : 'Instructions spéciales : rien à signaler'}</p>
            <p>{`Prix total de votre commande : ${sendOrder.total}  €`}</p>
          </Col>
          <Col sm={4}>
            <p>{`Merci ${user.name} !`}</p>
            <p>
              {`Ta commande a bien été prise en compte et transmise au restaurant ${restoInfos.name}`}
            </p>
            <p>Invite tes collègues à te rejoindre en utilisant le code de partage.</p>
            <p>{`Code de partage : ${code}`}</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

function mdtp(dispatch) {
  return bindActionCreators({
    initState,
  },
  dispatch);
}


function mstp(state) {
  return {
    menuResto: state.menuResto,
    sendOrder: state.sendOrder,
    chooseByUser: state.chooseByUser,
    getCode: state.getCode,
    log: state.log,
  };
}

export default connect(mstp, mdtp)(OrderSummary);

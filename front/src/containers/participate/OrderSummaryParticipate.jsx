import React, { Component } from 'react';
import {
  Container, Row, Col, Button,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { initState } from '../../actions';
import GeneralInformations from '../result/GeneralInformations';
import RestoInfos from '../result/RestoInfos';
import './OrderSummaryParticipate.scss';

class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

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
      log: { user },
      codeParticip,
    } = this.props;
    if (tabs.length === 0) {
      return (
        <div>
          <Button className="all-btn"><Link className="text-decoration-none" to="/">Retour à la page d'accueil</Link></Button>
        </div>
      );
    }

    return (
      <div className="OrderSummaryParticipate">
        <h1 className="title">{`Merci ${user.name} !`}</h1>
        <Container>
          <Row>
            <Col sm={3}>
              <RestoInfos />
              <GeneralInformations />
            </Col>
            <Col sm={6}>
              <p>
                {`Ta commande a bien été prise en compte et transmise au restaurant ${restoInfos.name}`}
              </p>
              <h1 className="code-partage">LunchCode : <br /> <strong>{codeParticip}</strong></h1>
            </Col>
            <Col sm={3}>
              <h3 className="title-card"><strong>Récapitulatif</strong></h3>
              <p>{tableCommand.special !== undefined ? `Instructions spéciales : ${tableCommand.special}` : 'Instructions spéciales : rien à signaler'}</p>
              <p>{`Prix total de votre commande : ${sendOrder.total}  €`}</p>
              <h3 className="title-card"><strong>Détails</strong></h3>
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
                    <li>{item[item.text]}</li>
                  );
                })
                }
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

function mstp(state) {
  return {
    menuResto: state.menuResto,
    sendOrder: state.sendOrder,
    chooseByUser: state.chooseByUser,
    log: state.log,
    codeParticip: state.codeParticip,
  };
}

const mdtp = dispatch => bindActionCreators({ initState }, dispatch);


export default connect(mstp, mdtp)(OrderSummary);

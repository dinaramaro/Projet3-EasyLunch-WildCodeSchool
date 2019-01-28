import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Col, Row, Button,
} from 'reactstrap';
import StripeCheckout from 'react-stripe-checkout';
import { varServeur, publicStripeKey } from '../../constants';
import { sendCommand } from '../../actions/sendCommand';
import { stripePayment } from '../../actions/stripePayment';
import { notifSuccess, notifError, notifInfo } from '../../actions/notifications';
import './PayOrder.scss';

class PayOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.redirectConnect = this.redirectConnect.bind(this);
    this.onToken = this.onToken.bind(this);
  }

  componentDidUpdate(prevProps) {
    const { getCode, history } = this.props;
    if (prevProps.getCode.code === '' && getCode.code) {
      history.push('/recapitulatif-commande');
    }
  }

  onToken(token) {
    const {
      stripePayment, sendOrder: { sendOrder }, chooseByUser: { total },
    } = this.props;
    const amount = Math.round(total * 100);
    stripePayment(`${varServeur}pay/${amount}`, token, sendOrder);
  }

  redirectConnect() {
    const { history, location: { pathname }, activeTab } = this.props;
    history.push({
      pathname: '/connexion',
      state: {
        from: { pathname },
        activeTab,
      },
    });
  }

  displayButtonPay() {
    const {
      log: { user },
      formulaire, chooseByUser: { total }
    } = this.props;

    if (_.isEmpty(user)) {
      return (
        <Button className="all-btn" onClick={this.redirectConnect}>Se connecter avant de payer</Button>
      );
    }

    if (formulaire.nb_users && formulaire.schedule) {
      let { chooseByUser: { total } } = this.props;
      if (total % 1 !== 0) {
        total = `${total}0`;
      }
      const totalSend = total * 100 / 100;
      return (
        <StripeCheckout
          token={this.onToken}
          stripeKey={publicStripeKey}
          amount={Math.round(totalSend * 100)}
          currency="EUR"
        >
          <Button className="all-btn">
            Payer {totalSend}
            €
          </Button>
        </StripeCheckout>
      );
    }

    return (
      <Button className="all-btn">
            Payer {total}
            €
      </Button>
    );
  }

  render() {
    let { chooseByUser: { total } } = this.props;
    if (total % 1 !== 0) {
      total = `${total}0`;
    }
    return (
      <div className="PayOrder">
        <Row>
          <Col sm={12} className="pay-button">
            { this.displayButtonPay() }
          </Col>
        </Row>
      </div>
    );
  }
}

function mstp(state) {
  return {
    chooseByUser: state.chooseByUser,
    sendOrder: state.sendOrder,
    getCode: state.getCode,
    log: state.log,
    activeTab: state.setActiveTab.activeTab,
    formulaire: state.formOrder.formulaire,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    sendCommand,
    notifSuccess,
    notifError,
    notifInfo,
    stripePayment,
  }, dispatch);
}


export default withRouter(connect(mstp, mdtp)(PayOrder));

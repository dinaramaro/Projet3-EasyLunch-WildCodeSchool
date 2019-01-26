import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import { connect } from 'react-redux';
import {
  Col, Row, Button,
} from 'reactstrap';
import StripeCheckout from 'react-stripe-checkout';
import { varServeur } from '../../constants';
import { sendCommand } from '../../actions/sendCommand';
import { stripePayment } from '../../actions/stripePayment';
import { notifSuccess, notifError, notifInfo } from '../../actions/notifications';

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

  render() {
    const {
      log: { user },
    } = this.props;
    let { chooseByUser: { total } } = this.props;
    if (total % 1 !== 0) {
      total = `${total}0`;
    }
    const totalSend = total * 100 / 100;


    return (
      <div className="PayOrder">
        <Row>
          <Col sm={2}>
            {'Total :'}
          </Col>
          <Col sm={4}>
            {`${total} €`}
          </Col>
          <Col sm={6}>
            {
              (!_.isEmpty(user))
                ? (
                  <StripeCheckout
                    token={this.onToken}
                    stripeKey="pk_test_ZCwiDmFVZLz1lf8Me8mVthXP"
                    amount={Math.round(totalSend * 100)}
                    currency="EUR"
                  >
                    <Button type="button">
                      Payer
                    </Button>
                  </StripeCheckout>
                )
                : <Button onClick={this.redirectConnect}>Se connecter avant de payer</Button>
            }
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
  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    sendCommand,
    notifSuccess,
    notifError,
    notifInfo,
    stripePayment,
  },
  dispatch);
}


export default withRouter(connect(mstp, mdtp)(PayOrder));

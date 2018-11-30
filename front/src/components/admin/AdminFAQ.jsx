/* eslint-disable */

import React, { Component } from 'react';
import {
  Container, Row, Col,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchFAQ } from '../actions/adminFAQAction';
import Question from './Question';


class adminFAQ extends Component {

  componentDidMount() {
    const { fetchFAQ } = this.props;
    { fetchFAQ } ('http://localhost:4000/api/about/faq')
  }

  render() {
    return (
      <Container className="FAQ">
        <Row>
          <Col>
            <h1 className="title">FAQ</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="FAQ-text">
              {`Vous avez une question concernant EasyLunch ? Découvrez ici toutes les réponses concernant le concept EasyLunch, les avantages, comment réserver un restaurant... 
        Si toutefois vous ne trouviez pas réponse à votre question dans cette rubrique, n'hésitez pas à nous contacter par mail sur l'adresse contact@easy-lunch.fr`}
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

const mstp = state => ({
  items: state.items,
});

const mdtp = dispatch => (
  bindActionCreators({
    fetchFAQ,
  }, dispatch)
);

export default connect(mstp, mdtp)(adminFAQ);

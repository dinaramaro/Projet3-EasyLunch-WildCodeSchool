import React, { Component } from 'react';
import './Result.scss';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Col, Row, Container } from 'reactstrap';
import Restaurants from './Restaurants';
import MapResult from '../../containers/result/MapResult';
import { varServeur } from '../../constants';
import { dataResults } from '../../actions/search';


class Result extends Component {
  componentDidMount() {
    const { location: { search }, resultRestaurants } = this.props;
    resultRestaurants(`${varServeur}search/${search}`);
  }

  render() {
    return (
      <Container fluid className="Result">
        <Row>
          <Col md={12} lg={8}>
            <Restaurants />
          </Col>
          <Col md={12} lg={4}>
            <MapResult />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mdtp(dispatch) {
  return bindActionCreators({ resultRestaurants: dataResults }, dispatch);
}

export default connect(null, mdtp)(Result);

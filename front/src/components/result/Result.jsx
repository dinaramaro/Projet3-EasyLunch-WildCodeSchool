import React, { Component } from 'react';
import './Result.scss';
import { connect } from 'react-redux';
import queryString from 'query-string';
import { bindActionCreators } from 'redux';
import {
  Col, Row, Container, Form, Input, Button,
} from 'reactstrap';
import Restaurants from './Restaurants';
import MapResult from '../../containers/result/MapResult';
import { varServeur } from '../../constants';
import { dataResults } from '../../actions/search';


class Result extends Component {
  constructor(props) {
    super(props);
    this.state = {
      keyword: '',
      personcapacity: '',
    };
    this.onChange = this.onChange.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  componentDidMount() {
    const { location: { search }, resultRestaurants } = this.props;
    resultRestaurants(`${varServeur}search/${search}`);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  searchSubmit(e) {
    e.preventDefault();
    const { resultRestaurants } = this.props;
    const query = queryString.stringify(this.state);
    resultRestaurants(`${varServeur}search/?${query}`);
  }

  render() {
    const { keyword, personcapacity } = this.state;
    return (
      <Container fluid className="Result">
        <Form className="searchBar" onSubmit={this.searchSubmit}>
          <Row>
            <Col xs="2" className="padding">
              <Input
                className="search1"
                placeholder="Restaurant, ville, adresse ou type de restaurant"
                value={keyword}
                onChange={this.onChange}
                name="keyword"
              />
            </Col>
            <Col xs="2">
              <Input
                type="select"
                className="search2"
                placeholder="Nombre de personnes"
                value={personcapacity}
                onChange={this.onChange}
                name="personcapacity"
              >
                <option>Pour combien ?</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
              </Input>
            </Col>
            <Col xs="4">
              <Button
                color="warning"
                className="btn-submit submit-button all-btn"
              >
                Rechercher
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col md={12} lg={7}>
            <Restaurants />
          </Col>
          <Col md={12} lg={5}>
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

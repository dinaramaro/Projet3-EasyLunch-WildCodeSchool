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
import { initState } from '../../actions';


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
    const { initState, location: { search }, resultRestaurants } = this.props;
    initState();
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
                placeholder="Restaurant, adresse"
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

                className="btn-submit submit-button all-btn"
              >
                Rechercher
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col lg={8} xl={8}>
            <Restaurants />
          </Col>
          <Col md={12} lg={4} xl={4}>
            <MapResult />
          </Col>
        </Row>
      </Container>
    );
  }
}

function mdtp(dispatch) {
  return bindActionCreators({ initState, resultRestaurants: dataResults }, dispatch);
}

export default connect(null, mdtp)(Result);

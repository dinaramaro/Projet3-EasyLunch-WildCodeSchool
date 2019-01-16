import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row,
  Col,
  Input,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Form,
} from 'reactstrap';
import queryString from 'query-string';
import './Restaurants.scss';
import { withRouter } from 'react-router';
import { varServeur } from '../../constants';
import { dataResults } from '../../actions/search';
import { menuResto } from '../../actions/menuResto';
import { toggleTab } from '../../actions';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    const { location: { search } } = props;
    const { keyword, personcapacity } = queryString.parse(search);
    this.state = {
      keyword,
      personcapacity,
    };
    this.onChange = this.onChange.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
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


  infoResto(id) {
    const { menuResto, toggleTab } = this.props;
    toggleTab();
    menuResto(`${varServeur}restaurant/menus/${id}`);
  }

  render() {
    const { searchResults: { results } } = this.props;
    const { keyword, personcapacity } = this.state;
    return (
      <div className="Restaurants">
        <Form onSubmit={this.searchSubmit}>
          <Row>
            <Col xs="4" className="padding">
              <Input
                className="search1"
                placeholder="Restaurant, ville, adresse ou type de restaurant"
                value={keyword}
                onChange={this.onChange}
                name="keyword"
              />
            </Col>
            <Col xs="3">
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
          {results.map(item => (
            <button className="showMenu" type="button" key={item.id} onClick={() => this.infoResto(item.id)}>
              <Col key={item.id} sm="12" md="6" xl="4">
                <Card className="card-restaurant">
                  <CardImg top width="100%" height="175px" src={item.picture} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardSubtitle>{item.address}</CardSubtitle>
                    <CardText>{item.city}</CardText>
                  </CardBody>
                </Card>
              </Col>
            </button>
          ))}
        </Row>
      </div>
    );
  }
}

function mstp(state) {
  return {
    searchResults: state.searchResults,
  };
}

function mdtp(dispatch) {
  return bindActionCreators({
    resultRestaurants: dataResults,
    menuResto,
    toggleTab,
  },
  dispatch);
}

export default withRouter(
  connect(
    mstp,
    mdtp,
  )(Restaurants),
);

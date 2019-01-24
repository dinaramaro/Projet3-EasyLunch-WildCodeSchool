import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
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
    return (
      <div className="Restaurants">
        <Row>
          {results.map(item => (
            <button className="showMenu" type="button" key={item.id} onClick={() => this.infoResto(item.id)}>
              <Col key={item.id} sm="12" md="6" xl="4">
                <Card className="card-restaurant">
                  <CardImg top width="100%" height="175px" src={item.picture} alt="Card image cap" />
                  <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    <CardSubtitle>{item.description}</CardSubtitle>
                    <br />
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

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
import './Restaurants.scss';
import { withRouter } from 'react-router';
import { varServeur } from '../../constants';
import { dataResults } from '../../actions/search';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    const {
      location: { search },
    } = this.props;
    this.state = {
      keyword: search
        .replace('?keyword=', '')
        .replace('&personcapacity', '')
        .replace(/[^]\d/, ''),
      personCapacity: search.replace(/\D+/g, ''),
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
    const { keyword, personCapacity } = this.state;
    const { resultRestaurants } = this.props;
    resultRestaurants(`${varServeur}search/?keyword=${keyword}&personcapacity=${personCapacity}`);
  }

  render() {
    const { searchResults: { results } } = this.props;
    const { keyword, personCapacity } = this.state;
    return (
      <div className="Restaurants">
        <Form onSubmit={this.searchSubmit}>
          <Row>
            <Col xs="4" className="padding">
              <Input
                className="search1"
                placeholder="Restaurant"
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
                value={personCapacity}
                onChange={this.onChange}
                name="personCapacity"
              >
                <option>Pour combien ?</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
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
            <Col sm="12" md="6" xl="4">
              <Card className="card-restaurant">
                <CardImg
                  top
                  width="400px"
                  height="175px"
                  src={item.picture}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle>{item.name}</CardTitle>
                  <CardSubtitle>{item.address}</CardSubtitle>
                  <CardText>{item.city}</CardText>
                </CardBody>
              </Card>
            </Col>
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
  return bindActionCreators({ resultRestaurants: dataResults }, dispatch);
}

export default withRouter(
  connect(
    mstp,
    mdtp,
  )(Restaurants),
);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Row, Col, Input, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button,
} from 'reactstrap';
import './Restaurants.scss';
import { withRouter } from 'react-router';
import { varServeur } from '../../constants';
import { dataResults } from '../../actions/search';
import { menuRestoInfos } from '../../actions/menuRestoInfos';
import { menuResto } from '../../actions/menuResto';

class Restaurants extends Component {
  constructor(props) {
    super(props);
    const { location: { search } } = this.props;
    this.state = {
      keyword: search.replace('?keyword=', ''),
    };
    this.onChange = this.onChange.bind(this);
    this.searchSubmit = this.searchSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  searchSubmit() {
    const { keyword } = this.state;
    const { resultRestaurants } = this.props;
    resultRestaurants(`${varServeur}search/${keyword}`);
  }


  infoResto(id) {
    const { menuRestoInfos, menuResto } = this.props;
    menuRestoInfos(`${varServeur}restaurant/infos/${id}`);
    menuResto(`${varServeur}restaurant/menus/${id}`);
  }

  render() {
    const { searchResults: { results } } = this.props;
    const { keyword } = this.state;
    return (
      <div className="Restaurants">
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
            <Button onClick={() => this.searchSubmit()} color="warning" className="submitButton all-btn">Rechercher</Button>
          </Col>
        </Row>
        <Row>
          {results.map(item => (
            <button type="button" key={item.id} onClick={() => this.infoResto(item.id)}>
              <Col sm="12" md="6" xl="4">
                <Card className="card-restaurant">
                  <CardImg top width="100%" src={item.picture} alt="Card image cap" />
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
    menuRestoInfos,
    menuResto,
  },
  dispatch);
}

export default withRouter(connect(mstp, mdtp)(Restaurants));

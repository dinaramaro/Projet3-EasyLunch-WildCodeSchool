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
import './Restaurants.scss';
import { withRouter } from 'react-router';
import Zoom from 'react-reveal/Zoom';
import { varServeur } from '../../constants';
import { dataResults } from '../../actions/search';
import { menuResto } from '../../actions/menuResto';

class Restaurants extends Component {
  infoResto(id) {
    const { menuResto, history } = this.props;
    menuResto(`${varServeur}restaurant/menus/${id}`);
    history.push('/commande-page');
  }

  render() {
    const { searchResults: { results } } = this.props;
    return (
      <div className="Restaurants">
        <Row>
          {results.map(item => (
            <button className="showMenu" type="button" key={item.id} onClick={() => this.infoResto(item.id)}>
              <Col key={item.id} sm="12" md="6" xl="4">
                <Zoom>
                  <Card className="card-restaurant">
                    <CardImg top width="100%" height="175px" src={item.picture} alt="Card image cap" />
                    <CardBody>
                      <CardTitle className="titleCard">{item.name}</CardTitle>
                      <br />
                      <CardSubtitle>
Restaurant :
                        { item.description}

                      </CardSubtitle>
                      <br />
                      <CardSubtitle>{item.address}</CardSubtitle>
                      <CardText>{item.city}</CardText>
                    </CardBody>
                  </Card>
                </Zoom>
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
  },
  dispatch);
}

export default withRouter(
  connect(
    mstp,
    mdtp,
  )(Restaurants),
);

import React from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Input, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import './Restaurants.scss';


const Restaurants = (props) => {
  const { searchResults: { results } } = props;

  return (
    <div className="Restaurants">
      <Row>
        <Col xs="6" className="padding">
          <Input
            className="search1"
            placeholder="Restaurant"
            style={{ width: '25vw' }}
          />
        </Col>
        <Col xs="6">
          <Input
            type="select"
            className="search2"
            placeholder="Nombre de personnes"
            style={{ width: '25vw' }}
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
      </Row>
      <Row>
        {results.map(item => (
          <Col sm="12" md="6" xl="4">
            <Card className="cardre-restaurant">
              <CardImg top width="100%" src={item.picture} alt="Card image cap" />
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
};

function mstp(state) {
  return {
    searchResults: state.searchResults,
  };
}

export default connect(mstp)(Restaurants);

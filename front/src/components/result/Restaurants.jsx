import React from 'react';
import {
  Row, Col, Input, Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle,
} from 'reactstrap';
import './Restaurants.scss';
import restaurants from '../../restaurantsList.json';

const Restaurants = () => (
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
      {restaurants.map(item => (
        <Col sm="12" md="6" xl="4">
          <Card className="cardre-restaurant">
            <CardImg top width="100%" src={item.image} alt="Card image cap" />
            <CardBody>
              <CardTitle>{item.name}</CardTitle>
              <CardSubtitle>{item.adress}</CardSubtitle>
              <CardText>{item.town}</CardText>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Row>
  </div>

);

export default Restaurants;

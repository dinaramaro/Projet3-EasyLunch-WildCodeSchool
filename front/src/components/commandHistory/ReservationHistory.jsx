/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import _ from 'lodash';
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import { varServeur } from '../../constants';
import './ReservationHistory.scss';

class ReservationHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [],
    };
  }

  componentDidMount() {
    const { userId } = this.props;
    fetch(`${varServeur}reservationhistory/${userId}`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          history: data,
        });
      });
  }

  render() {
    const { history } = this.state;
    return (
      <div className="ReservationHistory">
        <h1>Historique des réservations</h1>
        <Container>
          {
          (!_.isEmpty(history))
            ? (
              <Row>
                {
                history.map((item) => {
                  const scheduleToString = '' + item.schedule;
                  const hour = `${scheduleToString[0]}${scheduleToString[1]}h${scheduleToString[2]}${scheduleToString[3]}`;
                  return (
                    <Col lg="4" md="5" xs="12">
                      <Card>
                        <CardImg top height="250px" src={item.picture} alt="Image restaurant" />
                        <CardBody>
                          <CardTitle>{item.name}</CardTitle>
                          <br />
                          <CardSubtitle><Moment format="DD/MM/YYYY">{item.created_date}</Moment></CardSubtitle>
                          <br />
                          <CardSubtitle>Adresse: {item.address}</CardSubtitle>
                          <br />
                          <CardText>Heure: {hour}</CardText>
                          <br />
                          <CardText>Participants: {item.nb_users}</CardText>
                          <CardText>Prix: {item.price} €</CardText>
                        </CardBody>
                      </Card>
                    </Col>
                  );
                })
              }
              </Row>
            )
            : (
              <div>Pas encore de commande</div>
            )
        }
        </Container>
      </div>
    );
  }
}

function mstp(state) {
  return {
    userId: state.log.user.id,
  };
}

export default connect(mstp)(ReservationHistory);

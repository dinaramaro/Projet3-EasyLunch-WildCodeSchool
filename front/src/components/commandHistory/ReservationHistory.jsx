/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import _ from 'lodash';
import Moment from 'react-moment';
import 'moment-timezone';
import { connect } from 'react-redux';
import Zoom from 'react-reveal/Zoom';
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
        <h1 className="title">Historique des réservations</h1>
        <Container>
          {
          (!_.isEmpty(history))
            ? (
              <Row>
                {
                history.map((item) => {
                  const scheduleToString = `${item.schedule}`;
                  const hour = `${scheduleToString[0]}${scheduleToString[1]}h${scheduleToString[2]}${scheduleToString[3]}`;
                  return (
                    <Col key={item.id} lg="4" md="6" xs="12">
                      <Zoom>
                        <Card>
                          <CardImg top width="100%" height="175px" src={item.picture} alt="Image restaurant" />
                          <CardBody>
                            <CardTitle className="titleCard">{item.name}</CardTitle>
                            <br />
                            <CardSubtitle>Dernière commande: <Moment format="DD/MM/YYYY">{item.created_date}</Moment></CardSubtitle>
                            <CardText> à {hour}</CardText>
                            <br />
                            <CardSubtitle><i className="fa fa-home" /> {item.address}</CardSubtitle>
                            <br />
                            <CardText><i className="fa fa-users" /> {item.nb_users}</CardText>
                            <CardText><i className="fa fa-money-bill" /> {item.price} €</CardText>
                          </CardBody>
                        </Card>
                      </Zoom>
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

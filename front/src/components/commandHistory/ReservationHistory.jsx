import React, { Component } from 'react';
import {
  Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
} from 'reactstrap';
import { connect } from 'react-redux';
import { varServeur } from '../../constants';

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
      <div>
        <h1 className="title">Historique des réservations</h1>
        <Container>
          <Row>
            {
              history.map(item => (
                <Col lg="4">
                  <Card style={{ border: 'none', backgroundColor: 'whitesmoke' }}>
                    <CardImg top height="250px" src={item.picture} alt="Image restaurant" />
                    <CardBody>
                      <CardTitle>{item.name}</CardTitle>
                      <br />
                      <CardSubtitle>Le: {item.created_date}</CardSubtitle>
                      <br />
                      <CardSubtitle>Adresse: {item.address}</CardSubtitle>
                      <br />
                      <CardText>Heure: {item.schedule}</CardText>
                      <br />
                      <CardText>Participants: {item.nb_users}</CardText>
                      <CardText>Prix: {item.price}0 €</CardText>
                    </CardBody>
                  </Card>
                </Col>
              ))
            }
          </Row>
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

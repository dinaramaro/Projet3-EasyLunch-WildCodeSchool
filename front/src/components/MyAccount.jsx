/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Moment from 'react-moment';
import 'moment-timezone';
import {
  Container, Card, CardBody,
  CardTitle, CardSubtitle, Row, Input, Col,
} from 'reactstrap';
import './MyAccount.scss';

class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPwd: '',
      newPwd: '',
    };
    this.changePassword = this.changePassword.bind(this);
  }

  changePassword(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const {
      oldPwd,
      newPwd,
    } = this.state;
    const {
      user,
      mail,
      phone,
      date,
    } = this.props;
    return (
      <div className="MyAccount">
        <h1 className="title">
        Bienvenue {user}
        </h1>
        <Container>
          <Card>
            <CardBody>
              <CardTitle>Mes informations :</CardTitle>
              <br />
              <CardSubtitle>Nom : {user}</CardSubtitle>
              <br />
              <CardSubtitle>Email: {mail}</CardSubtitle>
              <br />
              <CardSubtitle>Tel: {phone}</CardSubtitle>
              <br />
              <CardSubtitle>Date de création: <Moment format="DD/MM/YYYY">{date}</Moment></CardSubtitle>
            </CardBody>
          </Card>
          <h4 className="change-pwd">Changer votre mot de passe</h4>
          <br />
          <Row>
            <Col>
              <Input
                type="password"
                placeholder="Votre ancien mot de passe"
                value={oldPwd}
                name="oldPwd"
                onChange={this.changePassword}
              />
            </Col>
            <Col>
              <Input
                type="password"
                placeholder="Votre nouveau mot de passe"
                value={newPwd}
                name="newPwd"
                onChange={this.changePassword}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mstp = state => ({
  user: state.log.user.name,
  mail: state.log.user.mail,
  phone: state.log.user.phone,
  date: state.log.user.createdAt,
});


export default connect(mstp, null)(MyAccount);

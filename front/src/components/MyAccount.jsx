/* eslint-disable react/jsx-one-expression-per-line */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Moment from 'react-moment';
import 'moment-timezone';
import {
  Container, Card, CardBody,
  CardTitle, CardSubtitle, Row, Input, Col, Form, Button,
} from 'reactstrap';
import './MyAccount.scss';
import { varServeur } from '../constants';
import { notifSuccess, notifError } from '../actions/notifications';


class MyAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldPwd: '',
      newPwd: '',
    };
    this.changePassword = this.changePassword.bind(this);
    this.newPassword = this.newPassword.bind(this);
  }

  changePassword(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  newPassword(e) {
    const { notifError, notifSuccess } = this.props;
    e.preventDefault();
    const { oldPwd, newPwd } = this.state;
    const { id } = this.props;

    fetch(`${varServeur}changepassword/${id}`, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        oldPwd,
        newPwd,
      }),
    })
      .then((response) => {
        if (response.status === 403) {
          notifError('Votre ancien mot de passe est incorrect');
        } else if (response.status === 500) {
          notifError('Erreur serveur');
        } else if (response.status === 200) {
          notifSuccess('Le mot de passe a été changé avec succès');
        }
        this.setState({
          oldPwd: '',
          newPwd: '',
        });
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
          <Form onSubmit={this.newPassword}>
            <Row>
              <Col>
                <Input
                  type="password"
                  placeholder="Votre ancien mot de passe"
                  value={oldPwd}
                  name="oldPwd"
                  onChange={this.changePassword}
                  className="input-shadow"
                />
              </Col>
              <Col>
                <Input
                  type="password"
                  placeholder="Votre nouveau mot de passe"
                  value={newPwd}
                  name="newPwd"
                  onChange={this.changePassword}
                  className="input-shadow"
                />
              </Col>
              <Button className="all-btn" type="submit">Modifier</Button>
            </Row>
          </Form>
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
  id: state.log.user.id,
});

const mdtp = dispatch => bindActionCreators({ notifSuccess, notifError }, dispatch);

export default connect(mstp, mdtp)(MyAccount);

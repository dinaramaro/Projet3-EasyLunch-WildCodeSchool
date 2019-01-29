import React, { Component } from 'react';
import './Register.scss';
import {
  Container, Input, Button, Form,
} from 'reactstrap';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notifSuccess, notifError } from '../actions/notifications';
import { varServeur } from '../constants';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
      phone: '',
      name: '',
    };
    this.onChangeInput = this.onChangeInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    const {
      notifError, notifSuccess, history, location: { state },
    } = this.props;
    e.preventDefault();
    fetch(`${varServeur}signup`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then((res) => {
        if (res.status === 500) {
          notifError('Adresse email déjà enregistré');
        }
        if (res.status === 200) {
          notifSuccess('Compte enregistré, vous pouvez vous connecter');
          if (state === undefined) {
            history.push('/connexion');
          } else {
            const { location: { state: { from: { pathname } } } } = this.props;
            history.push({
              pathname: '/connexion',
              state: { from: { pathname } },
            });
          }
        }
      });
  }

  render() {
    const {
      mail, password, phone, name,
    } = this.state;
    return (
      <div className="Register">
        <h1 className="title">Inscription</h1>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Input
              placeholder="Prénom et Nom"
              name="name"
              type="text"
              value={name}
              onChange={this.onChangeInput}
              required
              className="input-shadow"
            />
            <Input
              placeholder="Email"
              name="mail"
              type="mail"
              value={mail}
              onChange={this.onChangeInput}
              required
              className="input-shadow"
            />
            <Input
              placeholder="Portable"
              name="phone"
              type="text"
              value={phone}
              onChange={this.onChangeInput}
              required
              className="input-shadow"
            />
            <Input
              placeholder="Mot de passe"
              name="password"
              type="password"
              value={password}
              onChange={this.onChangeInput}
              minLength="8"
              required
              className="input-shadow"
            />
            <p className="give">Vos données ne seront utilisées que pour le besoin des restaurateurs.</p>
            <Button className="all-btn" type="submit"> Inscription </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({ notifSuccess, notifError }, dispatch);

export default connect(null, mdtp)(withRouter(Register));

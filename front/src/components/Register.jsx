import React, { Component } from 'react';
import './Register.scss';
import {
  Container, Input, Button, Form,
} from 'reactstrap';
import { withRouter } from 'react-router';
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
    e.preventDefault();
    fetch(`${varServeur}signup`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    });
    const { history } = this.props;
    history.push('/connexion');
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
            />
            <Input
              placeholder="Email"
              name="mail"
              type="mail"
              value={mail}
              onChange={this.onChangeInput}
              required
            />
            <Input
              placeholder="Portable"
              name="phone"
              type="text"
              value={phone}
              onChange={this.onChangeInput}
              required
            />
            <Input
              placeholder="Mot de passe"
              name="password"
              type="password"
              value={password}
              onChange={this.onChangeInput}
              required
            />
            <Button className="all-btn" type="submit"> Inscritpion </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Register);

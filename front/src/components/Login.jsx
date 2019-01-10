import React, { Component } from 'react';
import './Login.scss';
import {
  Col,
  Row,
  Form,
  Button,
  Label,
  Input,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setUser } from '../actions/logIn';
import { varServeur } from '../constants';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mail: '',
      password: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }


  onChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { setUser, history, location: { state } } = this.props;
    fetch(`${varServeur}signin`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then((data) => {
        if (data.user) {
          setUser(data.user, data.token);
          Cookies.set('token', data.token, { expires: 1 });
          const { from } = state || { from: { pathname: '/mon-compte' } };
          history.push(from.pathname);
        }
      });
  }

  render() {
    const { mail, password } = this.state;
    return (
      <div className="Login">
        <h1 className="title">Connexion</h1>
        <Container>
          <Form onSubmit={this.handleSubmit}>
            <Row>
              <Col md={6}>
                <Label for="Email">Email</Label>
                <Input
                  type="email"
                  placeholder="Jhon@snow.fr"
                  name="mail"
                  value={mail}
                  onChange={this.onChangeInput}
                  required
                />
              </Col>
              <Col md={6}>
                <Label for="Password">Mot de passe</Label>
                <Input
                  type="password"
                  placeholder="fantome"
                  name="password"
                  value={password}
                  onChange={this.onChangeInput}
                  required
                />
              </Col>
            </Row>
            <Button className="all-btn" type="submit">Connexion</Button>
          </Form>
          <Button className="all-btn" tag={Link} to="/inscription">Créer un compte</Button>
        </Container>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({ setUser }, dispatch);

export default connect(null, mdtp)(withRouter(Login));

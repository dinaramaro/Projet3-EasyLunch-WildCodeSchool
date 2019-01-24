import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Label, Button, Input,
} from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notifSuccess, notifError } from '../../actions/notifications';
import { varServeur } from '../../constants';
import './Restaurant.scss';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      message: '',
      email: '',
      subject: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/contact-restaurant`)
      .then(res => res.json())
      .then(data => this.setState({ text: data }));
  }

  onChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, subject, message } = this.state;
    const mail = {
      email,
      subject,
      message,
    };
    const { notifError, notifSuccess } = this.props;
    fetch(`${varServeur}mailcontact`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(mail),
    })
      .then((res) => {
        if (res.status === 500) {
          notifError('Une erreur serveur, veuillez reéssayer');
        }
        if (res.status === 200) {
          notifSuccess('Email bien envoyé');
          this.setState({
            subject: '',
            email: '',
            message: '',
          });
        }
      });
  }

  render() {
    const {
      text, message, email, subject,
    } = this.state;
    return (
      <div className="Restaurant">
        <h1>VOUS ÊTES RESTAURATEUR?</h1>
        <Container>
          <div>
            <p>
              <div className="ql-editor" dangerouslySetInnerHTML={{ __html: text }} />
            </p>
          </div>
          <h1 className="form-title">NOUS CONTACTER</h1>
          <div className="form-div">
            <Form className="form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label className="email">VOTRE E-MAIL</Label>
                <Input
                  required
                  type="email"
                  name="email"
                  onChange={this.onChangeInput}
                  value={email}
                />
              </FormGroup>
              <FormGroup>
                <Label>SUJET</Label>
                <Input
                  required
                  type="text"
                  name="subject"
                  onChange={this.onChangeInput}
                  value={subject}
                />
              </FormGroup>
              <FormGroup>
                <Label>VOTRE MESSAGE</Label>
                <br />
                <Input
                  required
                  type="textarea"
                  name="message"
                  onChange={this.onChangeInput}
                  value={message}
                />
              </FormGroup>
              <Button color="warning" type="submit" className="all-btn">
                ENVOYER
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

const mdtp = dispatch => bindActionCreators({ notifSuccess, notifError }, dispatch);

export default connect(null, mdtp)(Restaurant);

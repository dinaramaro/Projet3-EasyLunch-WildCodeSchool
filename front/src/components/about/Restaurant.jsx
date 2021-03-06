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
      contactText: '',
      text: '',
      email: '',
      subject: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/contact-restaurant`)
      .then(res => res.json())
      .then(data => this.setState({ contactText: data }));
  }

  onChangeInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const { email, subject, text } = this.state;
    const mail = {
      email,
      subject,
      text,
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
            text: '',
          });
        }
      });
  }

  render() {
    const {
      contactText, text, email, subject,
    } = this.state;
    return (
      <div className="Restaurant">
        <h1 className="title">VOUS ÊTES RESTAURATEUR?</h1>
        <Container>
          <div>
            <p>
              <div className="ql-editor" dangerouslySetInnerHTML={{ __html: contactText }} />
            </p>
          </div>
          <h1 className="form-title">NOUS CONTACTER</h1>
          <div className="form-div">
            <Form className="form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label className="email">VOTRE E-MAIL</Label>
                <Input
                  className="input-shadow"
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
                  className="input-shadow"
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
                  className="input-shadow"
                  required
                  type="textarea"
                  name="text"
                  onChange={this.onChangeInput}
                  value={text}
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

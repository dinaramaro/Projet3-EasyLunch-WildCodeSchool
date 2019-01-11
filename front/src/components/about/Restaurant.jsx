import React, { Component } from 'react';
import {
  Container, Form, FormGroup, Label, Button, Input,
} from 'reactstrap';
import { varServeur } from '../../constants';
import './Restaurant.scss';

class Restaurant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
    };
  }

  componentDidMount() {
    fetch(`${varServeur}admin/contact-restaurant`)
      .then(res => res.json())
      .then(data => this.setState({ text: data }));
  }

  render() {
    const { text } = this.state;
    return (
      <div className="Restaurant">
        <h1 className="title">VOUS ÊTES RESTAURATEUR?</h1>
        <Container>
          <div>
            <p>
              <div className="ql-editor" dangerouslySetInnerHTML={{ __html: text }} />
            </p>
          </div>
          <h1 className="form-title">NOUS CONTACTER</h1>
          <div className="form-div">
            <Form className="form">
              <FormGroup>
                <Label className="email">VOTRE E-MAIL</Label>
                <Input required type="email" name="email" />
              </FormGroup>
              <FormGroup>
                <Label>SUJET</Label>
                <Input required type="text" name="subject" />
              </FormGroup>
              <FormGroup>
                <Label>VOTRE MESSAGE</Label>
                <br />
                <Input type="textarea" name="text" />
              </FormGroup>
              <Button color="warning" className="all-btn">
                ENVOYER
              </Button>
            </Form>
          </div>
        </Container>
      </div>
    );
  }
}

export default Restaurant;

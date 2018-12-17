import React, { Component } from 'react';
import {
  Container, Row, Col, Input, Form, Button,
} from 'reactstrap';
import './FormPartners.scss';
import { varServeur } from '../../../constants';

class FormPartner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      picture: '',
      link: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  postPartner = (e) => {
    e.preventDefault();
    fetch(`${varServeur}admin/postpartner/`, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(this.state),
    })
      .then(() => {
        window.location.reload();
      });
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    const { name, picture, link } = this.state;
    return (
      <Container fluid className="FormPartners">
        <Form className="form" onSubmit={this.postPartner}>
          <Row>
            <Col lg="4">
              <Input
                type="name"
                name="name"
                value={name}
                onChange={this.handleChange}
                placeholder="Nom du partenaire"
              />
            </Col>
            <Col lg="4">
              <Input
                type="url"
                name="picture"
                onChange={this.handleChange}
                value={picture}
                placeholder="Lien de l'image du partenaire"
              />
            </Col>
            <Col lg="4">
              <Input
                type="url"
                name="link"
                onChange={this.handleChange}
                value={link}
                placeholder="Lien du site web"
              />
            </Col>
          </Row>
          <Button className="all-btn btn-submit send-partner">Envoyer</Button>
          <br />
        </Form>
      </Container>
    );
  }
}

export default FormPartner;

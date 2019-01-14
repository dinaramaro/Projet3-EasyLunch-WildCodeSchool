import React, { Component } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { varServeur } from '../../constants';
import './Contacts.scss';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactText: '',
    };
  }

  componentDidMount() {
    fetch(`${varServeur}admin/contact`)
      .then(res => res.json())
      .then(contactText => this.setState({ contactText }));
  }

  render() {
    const { contactText } = this.state;
    return (
      <div className="Contacts">
        <h1 className="title">NOUS CONTACTER</h1>
        <Container>
          <div className="contact">
            <p><div className="ql-editor" dangerouslySetInnerHTML={{ __html: contactText }} /></p>
            <Form className="form">
              <FormGroup>
                <Label className="email">VOTRE E-MAIL</Label>
                <Input
                  required
                  type="email"
                  name="email"
                  placeholder="VOTRE E-MAIL"
                />
              </FormGroup>
              <FormGroup>
                <Label>SUJET</Label>
                <Input required type="text" name="subject" placeholder="SUJET" />
              </FormGroup>
              <FormGroup>
                <Label>VOTRE MESSAGE</Label>
                <br />
                <Input type="textarea" name="text" placeholder="VOTRE MESSAGE" />
              </FormGroup>
              <Button color="warning" className="text-color">
                ENVOYER
              </Button>
            </Form>

            <section className="common-section">
              <div>
                <Row>
                  <Col>
                    <img
                      src="https://www.easy-lunch.fr/wp-content/uploads/elementor/thumbs/te%CC%81le%CC%81chargement-1-nsjf74kfxmcyey74par0xhohiixqiltud2d6p52q42.png"
                      alt="Easy-lunch-partenaires"
                    />
                    <p>Easy Lunch a été conçu pour et par les restaurateurs ! </p>
                    <p>Vous souhaitez en savoir plus sur Easy Lunch ?</p>
                    <Button color="success">Devenir partenaire</Button>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <a
                      href="https://itunes.apple.com/fr/app/easy-lunch/id1407269785?mt=8"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="logo"
                        src="https://www.easy-lunch.fr/wp-content/uploads/2018/08/T%C3%A9l%C3%A9charger-dans-App-Store1-1024x303.png"
                        alt="App-Store-Easy-Lunch"
                      />
                    </a>
                  </Col>
                  <Col>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.easy.lunch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="logo"
                        src="https://www.easy-lunch.fr/wp-content/uploads/2018/08/google-play-badge1-1024x303.png"
                        alt="Google-Store-Easy-Lunch"
                      />
                    </a>
                  </Col>
                </Row>
              </div>
            </section>
          </div>
        </Container>
      </div>
    );
  }
}

export default Contact;

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
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { notifSuccess, notifError } from '../../actions/notifications';
import { varServeur } from '../../constants';
import './Contacts.scss';
import RestoPub from './RestoPub';


class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactText: '',
      subject: '',
      email: '',
      text: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeInput = this.onChangeInput.bind(this);
  }

  componentDidMount() {
    fetch(`${varServeur}admin/contact`)
      .then(res => res.json())
      .then(contactText => this.setState({ contactText }));
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
          notifError("Une erreur serveur s'est produite");
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
      contactText, email, subject, text,
    } = this.state;
    return (
      <div className="Contacts">
        <h1 className="title-contact">NOUS CONTACTER</h1>
        <RestoPub />
        <Container>
          <div className="contact">
            <div className="ql-editor" dangerouslySetInnerHTML={{ __html: contactText }} />
            <Form className="form" onSubmit={this.handleSubmit}>
              <FormGroup>
                <Label className="email">VOTRE E-MAIL</Label>
                <Input
                  className="input-shadow"
                  required
                  type="email"
                  name="email"
                  placeholder="VOTRE E-MAIL"
                  onChange={this.onChangeInput}
                  value={email}
                />
              </FormGroup>
              <FormGroup>
                <Label>SUJET</Label>
                <Input required className="input-shadow" type="text" name="subject" placeholder="SUJET" onChange={this.onChangeInput} value={subject} />
              </FormGroup>
              <FormGroup>
                <Label>VOTRE MESSAGE</Label>
                <br />
                <Input className="area-input input-shadow" required type="textarea" name="text" placeholder="VOTRE MESSAGE" onChange={this.onChangeInput} value={text} />
              </FormGroup>
              <Button className="all-btn" type="submit">
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
const mdtp = dispatch => bindActionCreators({ notifSuccess, notifError }, dispatch);

export default connect(null, mdtp)(Contact);

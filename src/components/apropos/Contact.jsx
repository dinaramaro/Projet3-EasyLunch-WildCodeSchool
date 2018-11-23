import React from 'react';
import './Contact.scss';
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

const paragraph1Contact = 'Des questions, des suggestions, des conseils, des remarques, des demandes ? N’hésitez pas à nous contacter, nous sommes là pour vous aider. Nous vous apporterons une réponse avec plaisir dans les plus brefs délais.';
const paragraph2Contact = ' Toutes les informations dont vous nous ferez part nous permettrons d’améliorer le service Easy Lunch, nous sommes donc à l’écoute et impatiemment de vous lire 🙂';
const paragraph3Contact = 'Vous pouvez nous contacter en remplissant le formulaire ci-dessous ou directement par mail à l’adresse : contact@easy-lunch.fr';

const Contact = () => (
  <div className="Contact">
    <h2>NOUS CONTACTER</h2>
    <Container className="contact">
      <p>{paragraph1Contact}</p>
      {paragraph2Contact}
      <p>{paragraph3Contact}</p>
      <Form className="form">
        <FormGroup>
          <Label className="email">
            VOTRE E-MAIL
          </Label>
          <Input
            required
            type="email"
            name="email"
            placeholder="VOTRE E-MAIL"
          />
        </FormGroup>
        <FormGroup>
          <Label>SUJET</Label>
          <Input
            required
            type="text"
            name="subject"
            placeholder="SUJET"
          />
        </FormGroup>
        <FormGroup>
          <Label>VOTRE MESSAGE</Label>
          <br />
          <Input
            type="textarea"
            name="text"
            placeholder="VOTRE MESSAGE"
          />
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
        <div>
          <h2>Suivez notre actualité</h2>
          <a
            href="https://www.facebook.com/EasyLunchBordeaux"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo-sm"
              src="/medias/Facebook.png"
              alt="Easy-Lunch-facebook"
            />
          </a>
          <a
            href="https://www.instagram.com/easy_lunch_fr/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="logo-sm"
              src="/medias/instagram.png"
              alt="Easy-Lunch-instagram"
            />
          </a>
        </div>
      </section>
    </Container>
  </div>
);

export default Contact;

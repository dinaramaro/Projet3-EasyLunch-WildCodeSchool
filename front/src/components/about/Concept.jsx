import React, { Component } from 'react';
import {
  Col, Row, Button, Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Concept.scss';
import { varServeur } from '../../constants';

class Concept extends Component {
  constructor(props) {
    super(props);
    this.state = {
      concept: '',
    };
  }

  componentDidMount() {
    this.fetchConcept();
  }

  fetchConcept() {
    fetch(`${varServeur}admin/concept`)
      .then(results => results.json())
      .then((concept) => {
        this.setState({ concept });
      });
  }

  render() {
    const { concept } = this.state;
    return (
      <div className="Concept">
        <h1 className="title concept-title">
          EASY LUNCH, L&#39;APPLI QUI SIMPLIFIE VOTRE PAUSE-DÉJEUNER AU RESTAURANT !
        </h1>
        <Container>
          <Row>
            <Col lg="4" md="4" sm="12" className="box">
              <img
                src="/medias/1-Choisir-un-restaurant.png"
                alt="easy-lunch-choisir"
              />
            </Col>
            <Col lg="4" md="4" sm="12" className="box">
              <img src="/medias/2-Commander.png" alt="easy-lunch-commander" />
            </Col>
            <Col lg="4" md="4" sm="12" className="box">
              <img src="/medias/3-Partager.png" alt="easy-lunch-partager" />
            </Col>
          </Row>
          <br />
          <div className="ql-editor" dangerouslySetInnerHTML={{ __html: concept }} />
          <Row className="link-app">
            <Col>
              <img src="/medias/nous-contacter.png" alt="Easy-lunch-logo" />
              <p>Vous avez des questions sur Easy Lunch?</p>
              <p> Des avis ou des expériences à nous partager? Ecrivez-nous!</p>
              <Link to="/a-propos/contact">
                <Button color="success">Nous contacter</Button>
              </Link>
            </Col>
            <Col>
              <img
                src="/medias/devenir-partenaire.png"
                alt="Easy-lunch-partenaires"
              />
              <p>Easy Lunch a été conçu pour et par les restaurateurs ! </p>
              <p>Vous souhaitez en savoir plus sur Easy Lunch ?</p>
              <Link to="/a-propos/partenaires">
                <Button color="success">Devenir partenaire</Button>
              </Link>
            </Col>
          </Row>
          <h2 className="link-app">EasyLunch également disponible sur votre smartphone</h2>

          <Row className="link-app">
            <Col>
              <a
                href="https://itunes.apple.com/fr/app/easy-lunch/id1407269785?mt=8"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="logo"
                  src="https://www.easy-lunch.fr/wp-content/uploads/2018/08/Télécharger-dans-App-Store1-1024x303.png"
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
        </Container>
      </div>
    );
  }
}

export default Concept;

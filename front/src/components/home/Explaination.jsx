import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Explaination.scss';
import Media from './Media';

const Explaination = () => (
  <Container fluid className="Explaination">
    <Row>
      <Col className="col" xs="12" sm="4" md="4" lg="4">
        <div className="round">1</div>
        <button type="button" className="button1">
          <img
            className="icone1"
            src="./medias/icon-eat.svg"
            alt="Commandez avant 11h30"
          />
          <p className="title-ex1">Choisissez votre restaurant</p>
          <p className="para-details1">
            Trouvez un restaurant en fonction de vos critères de recherche.
          </p>
        </button>
      </Col>
      <Col className="col" xs="12" sm="4" md="4" lg="4">
        <div className="round">2</div>
        <button type="button" className="button2">
          <img
            className="icone2"
            src="./medias/icon-time.svg"
            alt="Profitez de votre pause"
          />
          <p className="title-ex2">Commandez et payez avant 11h30</p>
          <p className="para-details2">
            Choisissez parmi les formules du jour et la carte, effectuez votre
            commande en ligne et payez en toute sécurité.
          </p>
        </button>
      </Col>
      <Col className="col" xs="12" sm="4" md="4" lg="4">
        <div className="round">3</div>
        <button type="button" className="button3">
          <img
            className="icone3"
            src="./medias/icon-smiley.svg"
            alt="Partez sans payer"
          />
          <p className="title-ex3">Soyez servis dès votre arrivée</p>
          <p className="para-details3">
            Rendez-vous au restaurant, votre table est prête, profitez de votre
            déjeuner et des personnes qui vous accompagnent et partez sans
            passer par la caisse dès que vous avez fini.
          </p>
        </button>
      </Col>
    </Row>
    <div className="video-ex">
      <Media />
    </div>
    <br />
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
);

export default Explaination;

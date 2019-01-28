import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Media from './Media';
import './MediaMobApp.scss';
import Explaination from './Explaination';

const MediaMobApp = () => (
  <div className="MediaMobApp">
    <h1 className="title">Fonctionnement EASYLUNCH</h1>
    <Container>
      <Row>
        <Explaination />
      </Row>
      <Row className="video-ex">
        <Media />
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
  </div>);

export default MediaMobApp;

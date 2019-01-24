import React from 'react';
import { Container, Row } from 'reactstrap';
import Media from './Media';
import './MediaMobApp.scss';

const MediaMobApp = () => (
  <div className="MediaMobApp">
    <Container>
      <h2 className="title">Fonctionnement EASYLUNCH</h2>
      <Row className="video-ex">
        <Media />
      </Row>
      <Row>
        <div />
      </Row>
    </Container>
  </div>);

export default MediaMobApp;

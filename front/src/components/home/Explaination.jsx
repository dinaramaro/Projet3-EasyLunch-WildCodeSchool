import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Explaination.scss';

const Explaination = () => (
  <Container fluid className="Explaination">
    <Row>
      <Col className="col" xs="12" sm="4" md="4" lg="4">
        <div className="round">1</div>
        <div className="cardexpla">
          <img
            className="icone"
            src="./medias/icon-eat.svg"
            alt="Commandez avant 11h30"
          />
          <p className="title-ex">Choisissez votre restaurant</p>
        </div>
      </Col>
      <Col className="col" xs="12" sm="4" md="4" lg="4">
        <div className="round">2</div>
        <div className="cardexpla">
          <img
            className="icone"
            src="./medias/icon-time.svg"
            alt="Profitez de votre pause"
          />
          <p className="title-ex">Commandez et payez en toute sécurité avant 11h30</p>
        </div>
      </Col>
      <Col className="col" xs="12" sm="4" md="4" lg="4">
        <div className="round">3</div>
        <div className="cardexpla">
          <img
            className="icone"
            src="./medias/icon-smiley.svg"
            alt="Partez sans payer"
          />
          <p className="title-ex">Soyez servis dès votre arrivée et repartez quand vous voulez</p>
        </div>
      </Col>
    </Row>
  </Container>
);

export default Explaination;

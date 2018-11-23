import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  NavLink,
  Row,
  Col,
  Card,
  Container,
} from 'reactstrap';
import './Footer.scss';

const Footer = () => (
  <Container className="Footer" fluid>
    <Row>
      <Col xs="6" lg="3">
        <Card>
          <NavLink href="#">Le Concept</NavLink>
          <NavLink href="#">L&apos;Equipe</NavLink>
          <NavLink href="#">Aide/Service</NavLink>
        </Card>
      </Col>
      <Col xs="6" lg="3">
        <Card>
          <NavLink href="#">Facebook</NavLink>
          <NavLink href="#">Instagram</NavLink>
        </Card>
      </Col>
      <Col xs="12" lg="3">
        <Card>
          <NavLink href="#">Contact Restaurateur</NavLink>
          <NavLink href="#">Politique de Confidentialité</NavLink>
          <NavLink href="#">Conditions Générales</NavLink>
        </Card>
      </Col>
      <Col lg="3">
        <img className="image" src="medias/icone-easylunch-blanc.svg" alt="logo" />
      </Col>
    </Row>
  </Container>
);

export default Footer;

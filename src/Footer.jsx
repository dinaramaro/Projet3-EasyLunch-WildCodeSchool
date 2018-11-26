import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import {
  NavLink, Row, Col, Card, Container,
} from 'reactstrap';
import './Footer.scss';

const Footer = () => (
  <Container className="Footer" fluid>
    <Row>
      <Col xs="4" md="4" lg="3">
        <Card>
          <Link to="/apropos/contact">Contact Client</Link>
          <Link to="/">Contact Restaurateur</Link>
          <Link to="/apropos/partenaires">Nos Partenaires</Link>
        </Card>
      </Col>
      <Col xs="4" md="4" lg="3">
        <Card>
          <NavLink href="#">Facebook</NavLink>
          <NavLink href="#">Instagram</NavLink>
        </Card>
      </Col>
      <Col xs="4" md="4" lg="3">
        <Card>
          <Link to="/apropos/equipe">Equipe</Link>
          <Link to="/apropos/politique">Politique de confidentialité</Link>
          <Link to="/apropos/cgv">Conditions Générales</Link>
        </Card>
      </Col>
      <Col lg="3">
        <img
          className="image d-none d-sm-none d-md-none d-lg-block d-xl-block"
          src="medias/icone-easylunch-blanc.svg"
          alt="logo"
        />
      </Col>
    </Row>
  </Container>
);

export default Footer;

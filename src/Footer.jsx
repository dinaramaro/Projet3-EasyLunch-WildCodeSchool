import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
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
    <Row className="footer">
      <Col md="9">
        <Row>
          <Col>
            <Card>
              <Link to="/apropos/contact">Contact Client</Link>
              <Link to="/">Contact Restaurateur</Link>
              <Link to="/apropos/partenaires">Nos Partenaires</Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <Link to="/apropos/equipe">Equipe</Link>
              <Link to="/apropos/politique">Politique de confidentialité</Link>
              <Link to="/apropos/cgv">Conditions Générales</Link>
            </Card>
          </Col>
          <Col>
            <Card>
              <NavLink href="#">Facebook</NavLink>
              <NavLink href="#">Instagram</NavLink>
              <NavLink href="#">Twitter</NavLink>
            </Card>
          </Col>
        </Row>
      </Col>
      <Col className="logoF" md="3">
        <img className="image d-xs-none" src="/medias/icone-easylunch-blanc.svg" alt="logo" />
      </Col>
    </Row>
  </Container>
);

export default Footer;

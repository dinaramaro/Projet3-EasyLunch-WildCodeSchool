import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import './Footer.scss';

const Footer = () => (
  <Container className="Footer" fluid>
    <Row className="d-flex justify-content-around left foot">
      <Col lg={{ offset: 1, size: 3 }}>
        <li>
          <Link to="/a-propos/contact">Contact Client</Link>
        </li>
        <li>
          <Link to="/a-propos/restaurateur">Contact Restaurateur</Link>
        </li>
        <li>
          <Link to="/a-propos/politique">Politique de confidentialité</Link>
        </li>
      </Col>
      <Col>
        <li>
          <Link to="/a-propos/concept">Concept</Link>
        </li>
        <li>
          <Link to="/a-propos/equipe">Equipe</Link>
        </li>
        <li>
          <Link to="/a-propos/partenaires">Partenaires</Link>
        </li>
      </Col>
      <Col>
        <li>
          <Link to="/a-propos/cgv">CGV</Link>
        </li>
        <li>
          <Link to="/a-propos/faq">FAQ</Link>
        </li>
        <li>
          <a href="https://restaurateur.easy-lunch.fr/" target="_blank" rel="noopener noreferrer">
            Espace restaurateurs
          </a>
        </li>
      </Col>
      <Col className="footer">
        <a
          href="https://www.facebook.com/EasyLunchBordeaux"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-facebook-square fa-3x social fb" />
        </a>
        <a
          href="https://www.instagram.com/easy_lunch_fr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fa fa-instagram fa-3x social insta" />
        </a>
      </Col>
    </Row>
  </Container>
);

export default Footer;

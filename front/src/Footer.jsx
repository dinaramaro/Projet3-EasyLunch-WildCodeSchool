import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import './Footer.scss';

const Footer = () => (
  <Container className="Footer" fluid>
    <Row>
      <Col xs="8" md="7" lg="6" className="first-col">
        <ul>
          <li>
            <Link to="/a-propos/contact">Contact Client</Link>
          </li>
          <li>
            <Link to="/a-propos/restaurateur">Contact Restaurateur</Link>
          </li>
          <li>
            <Link to="/a-propos/partenaires">Nos Partenaires</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link to="/a-propos/equipe">Equipe</Link>
          </li>
          <li>
            <Link to="/a-propos/politique">Politique de confidentialité</Link>
          </li>
          <li>
            <Link to="/a-propos/cgv">Conditions Générales</Link>
          </li>
        </ul>
      </Col>
      <Col xs="2" md="3" lg="4">
        <a
          href="https://www.facebook.com/EasyLunchBordeaux/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Facebook
        </a>
        <br />
        <a
          href="https://www.instagram.com/easy_lunch_fr/?hl=fr"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>
      </Col>
      <Col xs="1" md="1" lg="1">
        <Link to="/">
          <img
            width="50em"
            src="medias/icone-easylunch-blanc.svg"
            alt="logo"
          />
        </Link>
      </Col>
    </Row>
  </Container>
);

export default Footer;

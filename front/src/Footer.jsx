import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Row, Col, Container } from 'reactstrap';
import './Footer.scss';

const Footer = () => (
  <Container className="Footer" fluid>
    <Row className="d-flex justify-content-around left">
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
      </Col>
      <Col>
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
    </Row>
  </Container>
);

export default Footer;

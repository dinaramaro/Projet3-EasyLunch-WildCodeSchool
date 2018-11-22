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
    <Row className="footer">
      <Col md="9">
        <Row>
          <Col>
            <Card>
              <NavLink href="#">Contact Client</NavLink>
              <NavLink href="#">Contact Restaurateur</NavLink>
              <NavLink href="#">Nos Partenaires</NavLink>
            </Card>
          </Col>
          <Col>
            <Card>
              <NavLink href="#">Mentions légales</NavLink>
              <NavLink href="#">politique de confidentialité</NavLink>
              <NavLink href="#">Conditions Générales</NavLink>
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
        <img className="image" src="medias/icone-easylunch-blanc.svg" alt="logo" />
      </Col>
    </Row>
  </Container>
);

export default Footer;

import React from 'react';
import {
  Button,
  Container,
  Row,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './RestoPub.scss';

const RestoPub = () => (
  <div className="RestoPub">
    <div className="fog" />
    <Container fluid>
      <Row className="posiresto">
        <h2 className="title">Vous êtes restaurateur ?</h2>
        <p className="textrestoPub">Devenir partenaire d’Easy Lunch, c’est décider de simplifier son service du midi. Contrairement aux autres solutions qui existent actuellement sur le marché. Vous souhaitez faire partie de la famille EASYLUNCH ?</p>
        <Button className="buttonrestoPub" tag={Link} to="/a-propos/restaurateur">Plus d'Informations</Button>
      </Row>
    </Container>
  </div>
);

export default RestoPub;

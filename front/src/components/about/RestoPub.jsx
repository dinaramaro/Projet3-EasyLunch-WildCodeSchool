import React from 'react';
import {
  Button,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './RestoPub.scss';

const RestoPub = () => (
  <div className="RestoPub">
    <div className="fog" />
    <Container fluid>
      <div className="posiresto">
        <p>Vous êtes restaurateur ?</p>
        <Button className=" all-btn button-resto" tag={Link} to="/a-propos/restaurateur">Plus d'Informations</Button>
      </div>
    </Container>
  </div>
);

export default RestoPub;

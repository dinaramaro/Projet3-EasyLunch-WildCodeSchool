import React from 'react';
import { Container } from 'reactstrap';
import Explication from './Explication';
import HomeInputs from './HomeInputs';

const Accueil = () => (
  <Container fluid>
    <HomeInputs />
    <Explication />
  </Container>
);

export default Accueil;

import React from 'react';
import { Link } from 'react-router-dom';
import './MealAdmin.scss';
import {
  Container,
  Row,
  NavItem,
} from 'reactstrap';


const MealAdmin = () => (
  <Container className="MealAdmin">
    <h2 className="title">Menu Administrateur</h2>
    <Row>
      <NavItem tag={Link} to="/admin/Admin-cgv">
        CGV
      </NavItem>
      <NavItem tag={Link} to="/admin/Admin-concept">
        Concept
      </NavItem>
      <NavItem tag={Link} to="/admin/Admin-partenaires">
        Partenaires
      </NavItem>
      <NavItem tag={Link} to="/admin/Admin-politique">
        Politique de Confidentialité
      </NavItem>
      <NavItem tag={Link} to="/admin/Admin-equipe">
        Equipe
      </NavItem>
    </Row>
  </Container>
);

export default MealAdmin;

import React from 'react';
import { Link } from 'react-router-dom';
import './MenuAdmin.scss';
import {
  Container,
  Row,
  NavItem,
} from 'reactstrap';


const Menu = () => (
  <Container className="MenuAdmin">
    <h2 className="title">Menu Administrateur</h2>
    <Row>
      <NavItem tag={Link} to="/admin/AdminCGV">
        CGV
      </NavItem>
      <NavItem tag={Link} to="/admin/AdminConcept">
        Concept
      </NavItem>
      <NavItem tag={Link} to="/admin/AdminPartenaires">
        Partenaires
      </NavItem>
      <NavItem tag={Link} to="/admin/AdminPolitique">
        Politique de Confidentialité
      </NavItem>
      <NavItem tag={Link} to="/admin/AdminEquipe">
        Equipe
      </NavItem>
    </Row>
  </Container>
);

export default Menu;

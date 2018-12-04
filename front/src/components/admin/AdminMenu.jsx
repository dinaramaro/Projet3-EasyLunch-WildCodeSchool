import React from 'react';
import { Link } from 'react-router-dom';
import './AdminMenu.scss';
import {
  Container,
  Row,
  NavItem,
} from 'reactstrap';

const Menu = () => (
  <Container className="AdminMenu">
    <h2 className="title">Menu Administrateur</h2>
    <Row>
      <NavItem tag={Link} to="/admin/admin-cgv">
        CGV
      </NavItem>
      <NavItem tag={Link} to="/admin/admin-concept">
        Concept
      </NavItem>
      <NavItem tag={Link} to="/admin/admin-partenaires">
        Partenaires
      </NavItem>
      <NavItem tag={Link} to="/admin/admin-politique">
        Politique de Confidentialité
      </NavItem>
      <NavItem tag={Link} to="/admin/admin-equipe">
        Equipe
      </NavItem>
    </Row>
  </Container>
);

export default Menu;

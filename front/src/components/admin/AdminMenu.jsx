import React from 'react';
import { Link } from 'react-router-dom';
import './AdminMenu.scss';
import { Nav, NavItem } from 'reactstrap';


const AdminMenu = () => (
  <div className="AdminMenu">
    <Nav className="menu">
      <NavItem className="sidenav" tag={Link} to="/admin/admin-cgv">
        CGV
      </NavItem>
      <NavItem className="sidenav" tag={Link} to="/admin/admin-concept">
        Concept
      </NavItem>
      <NavItem className="sidenav" tag={Link} to="/admin/admin-partenaires">
        Partenaires
      </NavItem>
      <NavItem className="sidenav" tag={Link} to="/admin/admin-politique">
        Politique de Confidentialité
      </NavItem>
      <NavItem className="sidenav bottom" tag={Link} to="/admin/admin-equipe">
        Equipe
      </NavItem>
      <NavItem className="sidenav" tag={Link} to="/admin/admin-faq">
        FAQ
      </NavItem>
    </Nav>
  </div>
);

export default AdminMenu;

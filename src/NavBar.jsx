import React from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
} from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  render() {
    const { isOpen } = this.state;
    return (
      <div className="nav-bar">
        <Navbar className="navbar-div" dark expand="md">
          <NavbarBrand>
            <Link to="/">
              <img
                src="/medias/weblogo-easylunch-blanc.png"
                alt="navbarLogo"
                className="navbar-logo"
              />
            </Link>
          </NavbarBrand>
          <NavItem tag={Link} to="/components/" className="join d-md-none d-lg-none">
              Je participe
          </NavItem>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem tag={Link} to="/components/Jeparticipe">
                  Je participe
              </NavItem>
              <NavItem tag={Link} to="/components/Connexion">
                  Connexion
              </NavItem>
              <NavItem>
                <a href="https://restaurateur.easy-lunch.fr/" target="_blank" rel="noopener noreferrer">
                  Espace restaurateurs
                </a>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

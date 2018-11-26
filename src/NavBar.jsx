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
          <NavItem className="join d-md-none d-lg-none">
            <Link to="/components/">
              Je participe
            </Link>
          </NavItem>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link
                  to="/components/Jeparticipe"
                >
                  Je participe
                </Link>
              </NavItem>
              <NavItem>
                <Link
                  to="/components/Connexion"
                >
                  Connexion
                </Link>
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

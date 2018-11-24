import React from 'react';
import './NavBar.scss';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
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
          <NavbarBrand href="/">
            <img
              src="/medias/weblogo-easylunch-blanc.png"
              alt="navbarLogo"
              className="navbar-logo"
            />
          </NavbarBrand>
          <NavItem className="je-participe d-md-none d-lg-none">
            <NavLink href="/components/">
              Je participe
            </NavLink>
          </NavItem>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink
                  href="/components/Jeparticipe"
                >
                  Je participe
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href="/components/Connexion"
                >
                  Connexion
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  A propos
                </DropdownToggle>
                <DropdownMenu right className="nav-dropdown">
                  <DropdownItem>
                    <NavLink href="/apropos/concept">
                      Le concept
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/apropos/equipe">
                      {"L'équipe"}
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/apropos/contact">
                      Contacts
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/apropos/cgv">
                      Conditions générales
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/apropos/confidentialite">
                      Politique de confidentialité
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/apropos/restaurateur">
                      Vous êtes restaurateur ?
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/apropos/partenaire">
                      Nos partenaires
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/apropos/faq">
                      FAQ
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="https://restaurateur.easy-lunch.fr/" target="_blank">
                  Espace restaurateurs
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

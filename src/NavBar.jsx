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
      <div className="navbar-div">
        <Navbar dark expand="md">
          <NavbarBrand href="/">
            <img
              src="/medias/weblogo-easylunch-blanc.png"
              alt="navbarLogo"
              className="navbar-logo"
            />
          </NavbarBrand>
          <NavItem className="je-participe d-md-none d-lg-none">
            <NavLink href="/components/" style={{ color: 'white' }}>
              Je participe
            </NavLink>
          </NavItem>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/" style={{ color: 'white' }}>
                  Je participe
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/components/" style={{ color: 'white' }}>
                  Connexion
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret style={{ color: 'white' }}>
                  A propos
                </DropdownToggle>
                <DropdownMenu right className="nav-dropdown">
                  <DropdownItem style={{ color: 'white' }}>
                    Le concept
                  </DropdownItem>
                  <DropdownItem style={{ color: 'white' }}>
                    {'L\'équipe'}
                  </DropdownItem>
                  <DropdownItem style={{ color: 'white' }}>
                    Contacts
                  </DropdownItem>
                  <DropdownItem style={{ color: 'white' }}>
                    Conditions générales
                  </DropdownItem>
                  <DropdownItem style={{ color: 'white' }}>FAQ</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="/components/" style={{ color: 'white' }}>
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

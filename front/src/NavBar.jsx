import React, { Component } from 'react';
import './NavBar.scss';
import { Link } from 'react-router-dom';
import Cookies from 'js-cookie';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { logout } from './actions/logIn';
import { mailAdmin } from './constants';
import { notifSuccess } from './actions/notifications';


class NavBar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
    this.logout = this.logout.bind(this);
  }

  toggle() {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  }

  logout() {
    const { logout, notifSuccess } = this.props;
    logout();
    Cookies.remove('token');
    notifSuccess('Vous avez été déconnecté');
  }

  render() {
    const { isOpen } = this.state;
    const { user } = this.props;
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
              <NavItem tag={Link} to="/participation">
                Je participe
              </NavItem>
              {
                (_.isEmpty(user))
                  ? (
                    <NavItem tag={Link} to="/connexion">
                      Connexion
                    </NavItem>
                  )
                  : (
                    <UncontrolledDropdown setActiveFromChild>
                      <DropdownToggle tag="a" className="dropdown-toggle nav-link" caret>
                        Mon Compte
                      </DropdownToggle>
                      <DropdownMenu className="drop">
                        <DropdownItem className="drop" tag={Link} to="/mon-compte" active>Mes Informations</DropdownItem>
                        <DropdownItem className="drop" tag={Link} to="/mon-compte/historique" active>Historique de Commande</DropdownItem>
                        {
                          (user.mail === mailAdmin)
                            ? (
                              <DropdownItem className="drop" tag={Link} to="/admin/admin-cgv" active>Administrateur</DropdownItem>
                            )
                            : (
                              <div />
                            )
                        }
                        <DropdownItem onClick={this.logout} tag="a" className="drop" active>Déconnexion</DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  )
              }
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

const mstp = state => ({
  user: state.log.user,
});
const mdtp = dispatch => bindActionCreators({ logout, notifSuccess }, dispatch);

export default connect(mstp, mdtp)(NavBar);

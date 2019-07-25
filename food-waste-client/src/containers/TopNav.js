import React, {Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./TopNav.css";
import { LinkContainer } from "react-router-bootstrap";
import PropTypes from 'prop-types';

function TopNav(props) {
    console.log(props);
    return (
      <Navbar fluid collapseOnSelect>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
          <h3 className="logo">WASTE<span color="white">LESS</span></h3>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <LinkContainer to="/ingredients">
              <NavItem>What's in your pantry?</NavItem>
            </LinkContainer>
          </Nav>
      
          <Nav pullRight>
          {props.isAuthenticated
            ? <Fragment>
                <LinkContainer to="/settings">
                  <NavItem>Settings</NavItem>
                </LinkContainer>
                <NavItem onClick={props.onLogout}>Logout</NavItem>
              </Fragment>
            : <Fragment>
                <LinkContainer to="/signup">
                  <NavItem>Signup</NavItem>
                </LinkContainer>
                <LinkContainer to="/login">
                  <NavItem>Login</NavItem>
                </LinkContainer>
              </Fragment>
          }
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

TopNav.propTypes = {
  isAuthenticated: PropTypes.bool,
  onLogout: PropTypes.func
};

export default TopNav;

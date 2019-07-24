import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from "react-bootstrap";
import "./TopNav.css";
import { LinkContainer } from "react-router-bootstrap";


function TopNav() {
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
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    );
}

export default TopNav;

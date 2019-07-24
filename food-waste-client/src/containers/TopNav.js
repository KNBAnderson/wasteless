import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavItem } from "react-bootstrap";

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
        <Navbar.Collapse>
          <NavItem href="/ingredients">What's in your pantry</NavItem>
      
          <Nav pullRight>
            <NavItem href="/signup">Signup</NavItem>
            <NavItem href="/login">Login</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar.Header>
    </Navbar>
    );
}

export default TopNav;

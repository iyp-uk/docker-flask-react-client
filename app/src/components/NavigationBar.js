import React from 'react'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import { IndexLinkContainer } from 'react-router-bootstrap'

const NavigationBar = (props) => (
  <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <span>{props.title}</span>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <IndexLinkContainer to="/">
          <NavItem eventKey={1}>Home</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="/about">
          <NavItem eventKey={2}>About</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="/status">
          <NavItem eventKey={3}>User Status</NavItem>
        </IndexLinkContainer>
      </Nav>
      <Nav pullRight>
        <IndexLinkContainer to="/register">
          <NavItem eventKey={1}>Register</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="/login">
          <NavItem eventKey={2}>Log In</NavItem>
        </IndexLinkContainer>
        <IndexLinkContainer to="/logout">
          <NavItem eventKey={3}>Log Out</NavItem>
        </IndexLinkContainer>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default NavigationBar
import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../Downloadables/Resume.pdf";
export class Navigation extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" fixed="top" className="nvabar-custon">
        <Navbar.Brand href="/">Pranjal Jain</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="navbar-right">
            <Nav.Link href={resume}>
              <Button variant="light">Curriculum Vitae (CV)</Button>
            </Nav.Link>
            <Nav.Link href="#link">
              <FaGithub color="rgba(255,255,255,0.8)" size="1.5em" />
            </Nav.Link>
            <Nav.Link href="#link">
              <FaLinkedin color="rgba(255,255,255,0.8)" size="1.5em" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

import React, { Component } from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import resume from "../Downloadables/Resume.pdf";
import { ReactComponent as PortfolioLogo } from "../assets/Image/logo.svg";

export class Navigation extends Component {
  render() {
    return (
      <Navbar variant="dark" expand="lg" fixed="top" className="nvabar-custon">
        <a href="/" className="navbar_logo_container">
          <PortfolioLogo className="navbar_logo" />
          <span>Pranjal Jain</span>
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="navbar-right">
            <Nav.Link href="http://blog.pranjaljain.tech">
              <Button className="moving-gradient">Blogs</Button>
            </Nav.Link>
            <Nav.Link href={resume}>
              <Button variant="light">Curriculum Vitae (CV)</Button>
            </Nav.Link>
            <Nav.Link href="https://github.com/pranjaljain0">
              <FaGithub color="rgba(255,255,255,0.8)" size="1.5em" />
            </Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/pranjal-jain-736552139/">
              <FaLinkedin color="rgba(255,255,255,0.8)" size="1.5em" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;

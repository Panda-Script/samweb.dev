import React from "react";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../navbar.css";
import "../styles.css";

const NavigationBar = () => {
  return (
    <Navbar expand="lg" className="navbar-dark gradient-custom" fixed="top">
      <Container fluid>
        {/* Navbar brand */}
        <Navbar.Brand as={Link} to="/">
          Sam Woodall | Code &bull; Create &bull; Collaborate
        </Navbar.Brand>

        {/* Toggle button */}
        <Navbar.Toggle aria-controls="navbarSupportedContent">
          <i className="fas fa-bars text-light"></i>
        </Navbar.Toggle>

        {/* Collapsible wrapper */}
        <Navbar.Collapse id="navbarSupportedContent">
          {/* Left links */}
          <Nav className="me-auto d-flex flex-row mt-3 mt-lg-0">
            <Nav.Item className="text-center mx-2 mx-lg-1">
              <Nav.Link as={Link} to="/" className="nav-link-custom">
                <div>
                  <i className="fas fa-home fa-lg mb-1"></i>
                </div>
                Home
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="text-center mx-2 mx-lg-1">
              <Nav.Link as={Link} to="/about" className="nav-link-custom">
                <div>
                  <i className="fas fa-user fa-lg mb-1"></i>
                </div>
                Blog
              </Nav.Link>
            </Nav.Item>

            <Nav.Item className="text-center mx-2 mx-lg-1">
              <Nav.Link as={Link} to="/contact" className="nav-link-custom">
                <div>
                  <i className="far fa-envelope fa-lg mb-1"></i>
                </div>
                Contact
              </Nav.Link>
            </Nav.Item>

            {/* Dropdown */}
            <Dropdown as={Nav.Item} className="text-center mx-2 mx-lg-1">
              <Dropdown.Toggle as={Nav.Link} className="nav-link-custom">
                <div>
                  <i className="fas fa-cog fa-lg mb-1"></i>
                </div>
                More
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item as={Link} to="/netseg">
                  Network Segmentation Quiz!
                </Dropdown.Item>
                <Dropdown.Item as={Link} to="/skills">
                  Skills
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="/other">
                  Other Links
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
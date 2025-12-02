// src/components/netseg/NetworkSegNavbar.jsx
import React from "react";
import { Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const NetworkSegNavbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === `/netseg${path}`;
  };

  return (
    <div className="netseg-subnavbar">
      <div className="netseg-nav-container">
        <Nav className="netseg-nav">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/netseg"
              className={`netseg-nav-link ${isActive("") ? "active" : ""}`}
            >
              Dashboard
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/netseg/badges"
              className={`netseg-nav-link ${
                isActive("/badges") ? "active" : ""
              }`}
            >
              Badges
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>
    </div>
  );
};

export default NetworkSegNavbar;

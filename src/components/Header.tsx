import React from "react";
import "../styles.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = () => {
  return (
    <header className="header-wrapper">
      <Container>
        <Row className="align-items-center">
          <Col xs={9} sm={10} md={10} lg={11} className="header-content">
            <p></p>
            <h1>Sam Woodall</h1>
            <p>Code &bull; Create &bull; Collaborate</p>
            <div className="code-snippet">
              <span className="gradient-text">
                {" "}
                SELECT * FROM developers WHERE name = 'Sam';
              </span>
              <span className="blinking-cursor">|</span>
            </div>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;

import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardGrid from "./CardGrid";
import { Intro } from "./Intro";
import Profile from "./Profile";
import Header from "./Header";
import NavigationBar from "./navbar";

import NetworkSegLayout from "./netseg/NetworkSegLayout";

// Your existing home page component
function HomePage() {
  return (
    <div>
      <Header />
      <h1 className="text-center my-4">My Projects</h1>
      <CardGrid />
      <Container>
        <Row>
          <Col sm={4}>
            <Profile />
          </Col>
          <Col sm={8}>
            <Intro />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

// New About page component
function About() {
  return (
    <Container className="my-4">
      <h1 className="text-center">About Me</h1>
      <Row>
        <Col>
          <p>
            This is the about page where you can share more information about
            yourself.
          </p>
          {/* Add your about content here */}
        </Col>
      </Row>
    </Container>
  );
}

// New Contact page component
function Contact() {
  return (
    <Container className="my-4">
      <h1 className="text-center">Contact</h1>
      <Row>
        <Col md={6}>
          <h3>Get in Touch</h3>
          <p>Add your contact form or information here.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default function App() {
  return (
    <Router>
      <div className="App">
        <NavigationBar />
        <div style={{ paddingTop: "55px" }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/netseg/*" element={<NetworkSegLayout />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}



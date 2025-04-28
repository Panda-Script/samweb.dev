import "../styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import me from "../images/me.jpg";
import CardGrid from "./CardGrid";
import { Intro } from "./Intro";
import Profile from "./Profile";
import { cardData } from "../data/cardData";
import Header from "./Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <Row>
          <Col sm={4}>
            <Profile />
          </Col>
          <Col sm={8}>
            <Intro />
            <h1 className="text-center my-4">My Projects</h1>
            <CardGrid cards={cardData} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export function Tabs() {}

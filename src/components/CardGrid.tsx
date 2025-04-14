import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { cardData } from '../../data/cardData';

const CardGrid = () => {
  return (
    <Container className="my-5">
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardData.map((card, index) => (
          <Col key={index}>
            <Card className="h-100">
              {card.image && (
                <Card.Img variant="top" src={card.image} alt={card.title} />
              )}
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
                {card.links && (
                  <div className="d-flex gap-animated flex-wrap">
                    {card.links.map((link, i) => (
                      <a
                        key={i}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-decoration-none link-primary me-3 mb-2 d-inline-block"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;

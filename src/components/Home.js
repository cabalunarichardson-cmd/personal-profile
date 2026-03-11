import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Home() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card className="text-center">
            <Card.Body>
              <Card.Title as="h1" className="display-4 mb-4">
                Welcome to My Profile!
              </Card.Title>
              <Card.Subtitle className="mb-3 text-muted">
                Aspiring Full Stack Developer
              </Card.Subtitle>
              <Card.Text className="lead">
                Hi, I'm passionate about creating beautiful and functional web applications.
                My goal is to become a skilled full-stack developer and contribute to
                innovative projects that make a difference in people's lives.
              </Card.Text>
              <Card.Text>
                I love learning new technologies and solving complex problems through code.
                Currently focusing on mastering React.js and expanding my knowledge in
                backend development with Node.js.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
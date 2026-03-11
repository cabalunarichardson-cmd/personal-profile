import React from 'react';
import { Container, Row, Col, Card, Image } from 'react-bootstrap';
import myPhoto from '../images/profile.jpg';  // Changed from ./ to ../

function About() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title as="h2" className="text-center mb-4">
                About Me
              </Card.Title>
              
              <Row className="mb-4">
                <Col xs={12} md={4} className="text-center mb-3 mb-md-0">
                  <Image 
                    src={myPhoto}
                    roundedCircle 
                    fluid 
                    alt="Profile"
                    className="border border-3 border-primary"
                    style={{ 
                      width: '150px', 
                      height: '150px', 
                      objectFit: 'cover' 
                    }}
                  />
                </Col>
                <Col xs={12} md={8}>
                  <h4>Background</h4>
                  <p>
                    I'm a passionate developer with a background in information tehcnology.
                    Currently studying in Information and Technology and have been
                    learning on various web development projects since then.
                  </p>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col>
                  <h4>Education</h4>
                  <p>
                    <strong>Bachelor of Science in Information and Technology</strong><br />
                    Currently studying at University of Cabuyao<br />
                    Relevant coursework: Web Development, Database Management, Programming
                  </p>
                </Col>
              </Row>

              <Row>
                <Col>
                  <h4>Hobbies & Interests</h4>
                  <ul>
                    <li>Reading tech blogs and staying updated with latest technologies</li>
                    <li>Playing chess and strategy games</li>
                    <li>Eating and playing online games</li>
                    <li>Learning new programming languages</li>
                  </ul>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Skills() {
  const skills = [
    { name: 'JavaScript', level: 'Intermediate', percentage: 70 },
    { name: 'React.js', level: 'Beginner', percentage: 40 },
    { name: 'CSS', level: 'Intermediate', percentage: 65 },
    { name: 'HTML', level: 'Advanced', percentage: 90 },
    { name: 'Python', level: 'Beginner', percentage: 35 },
    { name: 'Git', level: 'Beginner', percentage: 30 },
  ];

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title as="h2" className="text-center mb-4">
                My Skills
              </Card.Title>
              
              {/* Progress Bar Section */}
              <div className="mb-5">
                {skills.map((skill, index) => (
                  <div key={index} className="mb-4">
                    <div className="d-flex justify-content-between mb-2">
                      <span style={{ fontWeight: '500' }}>{skill.name}</span>
                      <span className="text-primary">{skill.level}</span>
                    </div>
                    <div className="progress" style={{ height: '10px', borderRadius: '5px' }}>
                      <div 
                        className="progress-bar" 
                        style={{ 
                          width: `${skill.percentage}%`,
                          backgroundColor: skill.level === 'Advanced' ? '#28a745' : 
                                         skill.level === 'Intermediate' ? '#007bff' : 
                                         '#ffc107',
                          borderRadius: '5px'
                        }}
                        role="progressbar"
                      />
                    </div>
                  </div>
                ))}
              </div>

              <hr className="my-4" />

              <Row>
                <Col>
                  <h5 className="text-center mb-3">Additional Skills</h5>
                  <div className="d-flex flex-wrap justify-content-center">
                    <span className="badge bg-secondary me-2 mb-2 p-2">Problem Solving</span>
                    <span className="badge bg-secondary me-2 mb-2 p-2">Teamwork</span>
                    <span className="badge bg-secondary me-2 mb-2 p-2">Communication</span>
                    <span className="badge bg-secondary me-2 mb-2 p-2">Time Management</span>
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Skills;
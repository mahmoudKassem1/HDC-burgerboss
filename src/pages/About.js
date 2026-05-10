import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import storyImg from '../assets/images/story-burger.jpg';

function About() {
  return (
    <Container className="py-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={storyImg} fluid rounded shadow alt="Our Team" />
        </Col>
        <Col md={6}>
          <h2 style={{ color: '#E65100', fontWeight: '800' }}>Our Story</h2>
          <p style={{ lineHeight: '1.8' }}>
            Founded in Alexandria by three software engineers, BurgerBoss is where 
            high-level logic meets high-quality ingredients. We optimize every burger 
            for maximum flavor and zero lag.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
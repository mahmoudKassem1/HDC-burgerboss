import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import storyImg from '../assets/images/story-burger.jpg';

function About() {
  return (
    <Container className="my-5">
      <Row className="align-items-center">
        <Col md={6}>
          <Image src={storyImg} className="img-horizontal" />
        </Col>
        <Col md={6}>
          <h2 style={{ color: '#E65100', fontWeight: '800' }}>Our Story</h2>
          <p>Founded by software engineers in Alexandria, we treat recipes like code—clean and efficient.</p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
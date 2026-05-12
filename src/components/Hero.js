import React from 'react';
import { Container, Button, Row, Col } from 'react-bootstrap';

function Hero({ title, subtitle, imgSource, buttonText, onBtnClick }) {
  return (
    <div className="hero-wrapper">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Text and Button */}
          <Col md={6} className="text-start">
            <h1 className="hero-title">{title}</h1>
            <p className="hero-subtitle">{subtitle}</p>
            <Button className="btn-boss" onClick={onBtnClick}>
              {buttonText}
            </Button>
          </Col>

          {/* Right Side: Scaled Image */}
          <Col md={6} className="text-center">
            <img src={imgSource} className="img-horizontal" alt="Burger" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
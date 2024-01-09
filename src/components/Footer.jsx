import React from "react";
import "../styles/Footer.scss";
import { Col, Container, Row } from "react-bootstrap";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/carmelia-shito/"><FaLinkedin className="icon"/></a>
              <a href="https://github.com/carmshito"><FaGithubSquare className="icon"/></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer

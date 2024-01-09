import React from "react";
import "../styles/Contact.scss";
import { Col, Row } from "react-bootstrap";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-bg">
        <Row>
          <Col className="contact-left">
            <h1 className="contact-title">Let's connect!</h1>
          </Col>
          <Col className="contact-right">
            <h1 className="contact-title">right</h1>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Contact

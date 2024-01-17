import React from "react";
import { skillsIcons } from "../data";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/Skills.scss";

const Skills = () => {
  return (
    <div>
      <Container fluid="md">
        <h1>Skills</h1>
        <Row lg={6}>
            {skillsIcons.map((icon) => {
              const IconComponent = icon.icon;
              return (
                <div className="skills-text">
                  <Col>
                      <IconComponent className="icon-skills"/>
                      <p>{icon.name}</p>
                  </Col>
                </div>
              )
            })}
        </Row>
      </Container>
    </div>
  )
}

export default Skills

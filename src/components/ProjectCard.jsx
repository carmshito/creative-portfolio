import React from "react";
import { Col } from "react-bootstrap";
import "../styles/Projects.scss";

const ProjectCard = ({ name, img, link }) => {
  return (
      <Col sm={6} md={4}>
        <div className="project-img">
          <img src={img} alt="" className="img"/>
          <div className="project-text">
            <h4>{name}</h4>
          </div>
        </div>
      </Col>
  )
}

export default ProjectCard

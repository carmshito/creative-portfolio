import React from "react";
import { Col } from "react-bootstrap";
import "../styles/Projects.scss";

const ProjectCard = ({ name, img, link, eventKey }) => {
  return (
      <Col sm={6} md={4}>
        <div className={eventKey === "second" || eventKey === "third" ? "mobile-project" : "project-img"}>
          <img src={img} alt="" className={eventKey=== "first" ? "web-img" : "img"}/>
        </div>
        {eventKey === "first" || eventKey === "second" ? (
          <div>
            <h3 className="project-text">{name}</h3>
            <div className="project-stack">
              <span></span>
            </div>
            <div className="project-description">
              <span></span>
            </div>
            <div className="project-link-button">
              <button className="main-button">view code</button>
            </div>
          </div>
        ) : null}
      </Col>
  )
}

export default ProjectCard

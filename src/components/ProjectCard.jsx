import React from "react";
import { Col } from "react-bootstrap";
import "../styles/Projects.scss";
import { FaGithub } from "react-icons/fa";


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
              <a href={link}>
                <button className="main-button">view code <FaGithub className="icon"/></button>
              </a>
            </div>
          </div>
        ) : null}
      </Col>
  )
}

export default ProjectCard

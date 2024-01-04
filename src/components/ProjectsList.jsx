import React from "react";
import "../styles/ProjectsList.scss";
import Projects from "./Projects";

const ProjectsList = () => {
  return (
    <div className="projects-list">
      <div className="projects-list-texts">
        <h1 className="projects-list-title">My Projects</h1>
        <p className="projects-list-desc">
        My Projects
        </p>
      </div>
      <div className="projects-list-list">
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
        <Projects />
      </div>
    </div>
  
  )
}

export default ProjectsList;
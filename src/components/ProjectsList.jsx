import React from "react";
import "../styles/ProjectsList.scss";
import Projects from "./Projects";

const ProjectsList = () => {
  return (
    <div className="projects-list">
      <div className="projects-list-texts">
        <h1 className="projects-list-title">Bark Mingle</h1>
        <p className="projects-list-desc">
        Bark Mingle is Tinder-esque style mobile app where dog owners can set-up playdates
        </p>
      </div>
      <div className="projects-list-list">
        <Projects />

      </div>
    </div>
  
  )
}

export default ProjectsList;
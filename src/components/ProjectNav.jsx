import React from "react";
import "../styles/ProjectNav.scss";
import { projects } from "../data";

const ProjectNav = () => {

  return (
    <div className="project-nav">
      {projects.map((item) => (
          <button type="nav-button" className="nav-button">{item.name}</button>
      ))}
    </div>
  )
}

export default ProjectNav
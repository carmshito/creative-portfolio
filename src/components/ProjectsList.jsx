import React from "react";
import "../styles/ProjectsList.scss";
import Project from "./Project";
import { projects } from "../data";
import ProjectNav from "./ProjectNav";

const ProjectsList = () => {
  return (
    <div className="projects-list">
      <div className="projects-list-texts">
        <h1 className="projects-list-title">My Projects</h1>
        <p className="projects-list-desc">
        My Projects
        </p>
      </div>
      <div>
        <ProjectNav />
      </div>
      <div className="projects-list-list">
        {projects.map((item) => (
          <Project key={item.id} link={item.link} img={item.img} name={item.name}/>
        ))}
    
      </div>
    </div>
  
  )
}

export default ProjectsList;
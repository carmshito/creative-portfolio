import React from "react";
import "../styles/Project.scss";

const Project = ({id, img, link, name}) => {
  return (
    <div className="project">
      <div className="project-browser">
        <div className="project-circle"></div>
        <div className="project-circle"></div>
        <div className="project-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img" />
        <h1>{name}</h1>
      </a> 
    </div>
  )
}

export default Project;

import React from "react";
import "../styles/About.scss";
import AboutImage from "../assets/about-photo.JPG";

const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <div className="about-card bg"></div>
        <div className="about-card">
          <img src={AboutImage} alt="" className="about-image" />
        </div>
      </div>
      <div className="about-right">
        <h1 className="about-title">About Me</h1>
        <p className="abaout-description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente alias iste ad, doloribus aperiam eius est commodi asperiores esse quos reiciendis exercitationem quo illo harum quasi hic nisi incidunt corrupti?
        </p>
      </div>
    </div>
  );
};

export default About;

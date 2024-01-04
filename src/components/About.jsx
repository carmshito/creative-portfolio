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
      <div className="about-right">right</div>
    </div>
  );
};

export default About;

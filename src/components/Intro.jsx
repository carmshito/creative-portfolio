import React from "react";
import "../styles/Intro.scss";
import MyImage from "../assets/pfp.png"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, my name is</h2>
          <h1 className="i-name">Carmelia Shito</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full Stack Web Developer</div>
              <div className="i-title-item">Designer</div>
              <div className="i-title-item">Illustrator</div>
              <div className="i-title-item">Creative</div>
            </div>
          </div>
          <p className="i-description">
            I am a <b>full stack web developer</b> and <b>creative</b> based in{" "}
            <b>Toronto</b>.<br />
            <br />
            This portfolio is my playground, featuring my projects and
            illustrations.
            <br />
            I enjoy drawing, playing sports, meeting new people, and taking on
            new challenges.
            <br />
            Let's create something amazing together!
          </p>
        </div>
      </div>

      <div className="i-right">
        <div className="i-bg"></div>
        <img src={MyImage} alt="" className="i-img" />
      </div>
    </div>
  );
};

export default Intro;

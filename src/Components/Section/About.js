import React from "react";
import "../Css/About.css";
import portfolio from "../../SVG/portfolio.png";
import cv from "../../SVG/cv.svg";
import ms14cv from "../../SVG/Muhamed-Sarhan-CV.pdf";

const About = () => {
  return (
    <div className="About">
      <div className="about-text">
        <h2>Hello .. I am</h2>
        <h1>Muhamed Sarhan</h1>
        <h4>( a front-end react web developer )</h4>
        <p>
          <span className="spanTxt">I am </span>a passionate Front-End Web
          Developer having an experience of building Web applications with
          JavaScript , Reactjs , and some other cool libraries and frameworks.
        </p>
        <p style={{ marginTop: "25px" }}>
          <span className="spanTxt">I love </span>exploring new technologies and
          being a practitioner .Also I am eager to learn and I have the passion
          to face new challenges . I am a committed team player , self motivated
          and have the ability to communicate with all levels.
        </p>
        <button className="cvBtn">
          <a href={ms14cv} download>
            <img src={cv} />
            <p>CV</p>
          </a>
        </button>
      </div>
      <div className="about-img">
        <img src={portfolio} />
      </div>
    </div>
  );
};

export default About;

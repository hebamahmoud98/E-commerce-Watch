import React from "react";
import "./Css/Footer.css";
import mylogo from "../SVG/mylogo.png";
import { Link } from "react-router-dom";
import facebook from "../SVG/facebook.svg";
import linkedin from "../SVG/linkedin.svg";
import website from "../SVG/mylogo.png";
import github from "../SVG/github.svg";
import whatsapp from "../SVG/whatsapp.svg";
import gmail from "../SVG/gmail.svg";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="ms14Footer">
        <img src={mylogo} alt="menu" />
      </Link>
      <div className="copyrights">
        <p>
          &copy;{new Date().getFullYear()} |
          <span style={{ color: "rgb(255, 238, 0)" }}>MS14</span> , all rights
          reserved.
        </p>
      </div>
      <div className="socialMedia">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://api.whatsapp.com/send?phone=201027345533"
        >
          <img src={whatsapp} />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:muhamedsarhan14@gmail.com"
        >
          <img src={gmail} />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/muhamed-sarhan-ms14/"
        >
          <img src={linkedin} />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/Muhamed-Sarhan/"
        >
          <img src={github} />
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://ms14.netlify.app/"
        >
          <img src={website} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

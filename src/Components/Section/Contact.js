import React from "react";
import "../Css/Contact.css";
import contact from "../../SVG/referral.svg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import facebook from "../../SVG/facebook.svg";
import linkedin from "../../SVG/linkedin.svg";
import website from "../../SVG/mylogo.png";
import github from "../../SVG/github.svg";
import instgram from "../../SVG/instagram.svg";
import twitter from "../../SVG/twitter.svg";
import whatsapp from "../../SVG/whatsapp.svg";
import gmail from "../../SVG/gmail.svg";

const Contact = () => {
  return (
    <div className="Contact">
      <div className="contact-social">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://api.whatsapp.com/send?phone=201027345533"
        >
          <img src={whatsapp} />
          <p>/Muhamed-Sarhan</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="mailto:muhamedsarhan14@gmail.com"
        >
          <img src={gmail} />
          <p>/Muhamed-Sarhan</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.facebook.com/muhamd.sarhan.14"
        >
          <img src={facebook} />
          <p>/Muhamed-Sarhan</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/muhamed-sarhan-ms14/"
        >
          <img src={linkedin} />
          <p>/Muhamed-Sarhan</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://ms14.netlify.app/"
        >
          <img src={website} />
          <p>/Muhamed-Sarhan</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/Muhamed-Sarhan"
        >
          <img src={github} />
          <p>/Muhamed-Sarhan</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.instagram.com/muhmd_sarhan_14/"
        >
          <img src={instgram} />
          <p>/Muhamed-Sarhan</p>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://twitter.com/muhmd_sarhan_14"
        >
          <img src={twitter} />
          <p>/Muhamed-Sarhan</p>
        </a>
      </div>
      <div className="contact-img">
        <img src={contact} />
      </div>
    </div>
  );
};

export default Contact;

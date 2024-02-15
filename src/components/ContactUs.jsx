import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import "../ComponentCss/ContactUs.css";
const ContactUs = ({ theme }) => {
  return (
    <div className="contactSection">
      <div
        className={`socialMediaIconContainer socialMediaIconContainer-${theme}`}
      >
        <a
          href="https://github.com/shubhams3423/shubham_weather_app"
          target="_blank"
        >
          <AiFillGithub
            className={`socialMediaIcons-${theme} socialMediaIcons `}
          />
        </a>
      </div>
      <div
        className={`socialMediaIconContainer socialMediaIconContainer-${theme}`}
      >
        <a href="">
          <BiLogoGmail
            className={`socialMediaIcons-${theme} socialMediaIcons`}
          />
        </a>
      </div>
      <div
        className={`socialMediaIconContainer socialMediaIconContainer-${theme}`}
      >
        <a
          href="https://www.linkedin.com/in/shubham-shinde-69b688297/"
          target="_blank"
        >
          <FaLinkedin
            className={`socialMediaIcons-${theme} socialMediaIcons`}
          />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;

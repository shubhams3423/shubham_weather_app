import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "../ComponentCss/ContactUs.css";
const ContactUs = ({ theme }) => {
  return (
    <div className="contactSection">
      <div
        className={`socialMediaIconContainer socialMediaIconContainer-${theme}`}
      >
        <a href="https://github.com/shubhams3423/shubham_weather_app">
          <AiFillGithub
            className={`socialMediaIcons-${theme} socialMediaIcons `}
          />
        </a>
      </div>
      <div
        className={`socialMediaIconContainer socialMediaIconContainer-${theme}`}
      >
        <a href="mailto :shubham1844s@gmail.com" target="_blank">
          <BiLogoGmail
            className={`socialMediaIcons-${theme} socialMediaIcons`}
          />
        </a>
      </div>
      <div
        className={`socialMediaIconContainer socialMediaIconContainer-${theme}`}
      >
        <a href="/">
          <AiFillLinkedin
            className={`socialMediaIcons-${theme} socialMediaIcons`}
          />
        </a>
      </div>
    </div>
  );
};

export default ContactUs;

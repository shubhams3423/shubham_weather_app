import React from "react";
import "../ComponentCss/WeatherIcon.css";
import { FiWind } from "react-icons/fi";
import { GiWindSlap } from "react-icons/gi";
import { faWind } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GiWhirlwind } from "react-icons/gi";
const WindIconContainer = ({ windSpeed }) => {
  return (
    <div>
      {windSpeed < 5 && windSpeed > 0 ? (
        <FiWind />
      ) : windSpeed < 49 && windSpeed >= 6 ? (
        <FontAwesomeIcon icon={faWind} beat />
      ) : windSpeed < 88 && windSpeed >= 50 ? (
        <GiWindSlap />
      ) : (
        <GiWhirlwind />
      )}
    </div>
  );
};

export default WindIconContainer;

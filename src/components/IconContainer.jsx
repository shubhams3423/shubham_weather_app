import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
 
const IconContainer = ({ weatherData }) => {
  return (
    <div>
      {weatherData.error ? (
        "?"
      ) : weatherData?.current?.humidity <= 55 ? (
        <FontAwesomeIcon icon={faDroplet} className="dropIcon-1" />
      ) : weatherData?.current?.humidity <= 65 &&
        weatherData?.current?.humidity > 55 ? (
        <FontAwesomeIcon icon={faDroplet} className="dropIcon-2" />
      ) : (
        <FontAwesomeIcon icon={faDroplet} className="dropIcon-3" />
      )}
    </div>
  );
}; 
export default IconContainer;
 
 

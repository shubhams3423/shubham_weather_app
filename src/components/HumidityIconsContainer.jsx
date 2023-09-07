import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDroplet } from "@fortawesome/free-solid-svg-icons";
const HumidityIconsContainer = ({ humidity, theme }) => {
  return (
    <div>
      {humidity <= 55 ? (
        <FontAwesomeIcon
          icon={faDroplet}
          bounce
          className={`dropIcon-1-${theme} `}
        />
      ) : humidity <= 65 && humidity > 55 ? (
        <FontAwesomeIcon
          icon={faDroplet}
          bounce
          className={`dropIcon-2-${theme}`}
        />
      ) : (
        <FontAwesomeIcon
          icon={faDroplet}
          bounce
          className={`dropIcon-3-${theme}`}
        />
      )}
    </div>
  );
};
export default HumidityIconsContainer;

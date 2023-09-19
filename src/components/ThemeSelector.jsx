import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { BiSolidMoon } from "react-icons/bi";
const ThemeSelector = ({ theme, setTheme }) => {
  return (
    <div className="darkLightModeContainer">
      <h2>{theme === "light" ? "Light" : "Dark"} Mode</h2>
      <div className="darkLightModeIcon">
        {theme === "light" ? (
          <BsFillSunFill
            className="sunIcon"
            onClick={() => {
              setTheme("dark");
            }}
          />
        ) : (
          <BiSolidMoon
            className="moonIcon"
            onClick={() => {
              setTheme("light");
            }}
          />
        )}
      </div>
    </div>
  );
};

export default ThemeSelector;

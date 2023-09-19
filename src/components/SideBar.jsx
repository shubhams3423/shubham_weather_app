import React from "react";
import ContactUs from "./ContactUs";
import "../ComponentCss/SideBar.css";
import ThemeSelector from "./ThemeSelector";
const SideBar = ({ theme, setTheme }) => {
  return (
    <div className="darkLightModeMainContainer">
      <ThemeSelector theme={theme} setTheme={setTheme} />
      <ContactUs theme={theme} />
    </div>
  );
};

export default SideBar;

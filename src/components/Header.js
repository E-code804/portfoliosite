import React, { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import lightModeIcon from "../assets/light-mode-icon.png";
import darkModeIcon from "../assets/moon-icon.svg";
import pdf from "../assets/resume.pdf";

library.add(faGithub);

const Header = ({ darkMode, setDarkMode }) => {
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);

  const toggleActiveHamburger = () => {
    setIsActiveHamburger(!isActiveHamburger);
  };
  return (
    <header className={`nav-bar ${darkMode ? "nav-bar-dark" : ""}`}>
      <h1 className={`${darkMode ? "dark-text" : ""}`}>Erik Pfeffer</h1>
      <div
        className={`link-btns ${isActiveHamburger ? "active" : ""} ${
          darkMode ? "dark-bg" : ""
        }`}
      >
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              href="https://github.com/E-code804"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={`${
                  darkMode ? "dark-text dark-nav-icon-size" : "icon"
                }`}
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="https://www.linkedin.com/in/erik-pfeffer-288347223/"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className={`${
                  darkMode ? "dark-text dark-nav-icon-size" : "icon"
                }`}
              ></FontAwesomeIcon>
            </a>
          </li>
          <li className="nav-item">
            <a
              href="mailto: erikpfeffer5@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <p>Email</p>
            </a>
          </li>
          <li className="nav-item">
            <a href={pdf} target="_blank" rel="noreferrer">
              <p>Resume</p>
            </a>
          </li>
          <li className="nav-item">
            <button
              className="toggle-icon"
              onClick={() => {
                setDarkMode(!darkMode);
              }}
            >
              <img
                className="toggle-img"
                src={darkMode ? lightModeIcon : darkModeIcon}
                alt="Light or Dark Mode icon"
              />
            </button>
          </li>
        </ul>
      </div>

      <div
        className={`hamburger ${isActiveHamburger ? "active" : ""}`}
        onClick={toggleActiveHamburger}
      >
        <span className={`bar ${darkMode ? "dark-bar" : ""}`}></span>
        <span className={`bar ${darkMode ? "dark-bar" : ""}`}></span>
        <span className={`bar ${darkMode ? "dark-bar" : ""}`}></span>
      </div>
    </header>
  );
};

export default Header;

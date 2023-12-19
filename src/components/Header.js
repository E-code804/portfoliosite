import React, { useState } from "react";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import pdf from "../assets/resume.pdf";

library.add(faGithub);

const Header = () => {
  const [isActiveHamburger, setIsActiveHamburger] = useState(false);

  const toggleActiveHamburger = () => {
    setIsActiveHamburger(!isActiveHamburger);
  };
  return (
    <header className="nav-bar">
      <h1>Erik Pfeffer</h1>
      <div className={`link-btns ${isActiveHamburger ? "active" : ""}`}>
        <ul className="nav-menu">
          <li className="nav-item">
            <a
              href="https://github.com/E-code804"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="icon"
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
                className="icon"
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
        </ul>
      </div>

      <div
        className={`hamburger ${isActiveHamburger ? "active" : ""}`}
        onClick={toggleActiveHamburger}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </header>
  );
};

export default Header;

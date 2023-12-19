import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Project = ({ title, link, description, langs, site, darkMode }) => {
  const langsLength = langs.length;
  return (
    <div className="project-container">
      <div className={`proj-header ${darkMode ? "proj-header-dark" : ""}`}>
        <h1>{title}</h1>
        <a href={link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            id="skill-gh"
            className="icon"
          ></FontAwesomeIcon>
        </a>
      </div>
      <div
        className={`proj-body ${darkMode ? "proj-body-dark dark-text" : ""}`}
      >
        <p>
          {description}{" "}
          {site ? (
            <a
              target="blank"
              className={`site-style ${darkMode ? "dark-text" : ""}`}
              href={site}
            >
              View here.
            </a>
          ) : (
            ""
          )}
        </p>
        <div className="proj-footer">
          <p>Languages, Frameworks, Tools:</p>
          {langs.map((lang, index) => (
            <span className="proj-lang" key={index}>
              {`${lang}${index < langsLength - 1 ? ", " : ""}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;

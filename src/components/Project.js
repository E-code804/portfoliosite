import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function Project(props) {
  return (
    <div className="project-container">
      <div className="proj-header">
        <h1>{props.title}</h1>
        <a href={props.link} target="_blank" rel="noreferrer">
          <FontAwesomeIcon
            icon={faGithub}
            id="skill-gh"
            className="icon"
          ></FontAwesomeIcon>
        </a>
      </div>
      <div className="proj-body">
        <p>{props.description}</p>
        <div className="proj-footer">
          <p>Languages, Frameworks, Tools:</p>
          {props.langs.map((lang, index) => (
            <span className="proj-lang" key={index}>
              {`${lang}${index < props.langs.length - 1 ? ", " : ""}`}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;

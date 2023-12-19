import React from "react";
import languages from "../skills-data";
import Skill from "./Skill";

const SkillsContainer = ({ darkMode }) => {
  const lan = languages.map((item, index) => (
    <Skill key={index} string={item.skill} darkMode={darkMode} {...item} />
  ));

  return (
    <div className="skills-container">
      <h1 className={`${darkMode ? "dark-text" : ""}`}>Skills</h1>
      <h2 className={`${darkMode ? "dark-text" : ""}`}>
        Languages, Frameworks, & Tools
      </h2>
      <div className="languages-container">{lan}</div>
    </div>
  );
};

export default SkillsContainer;

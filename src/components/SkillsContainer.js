import React from "react";
import languages from "../skills-data";
import Skill from "./Skill";

const SkillsContainer = () => {
  const lan = languages.map((item, index) => (
    <Skill key={index} string={item.skill} {...item} />
  ));

  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <h2>Languages, Frameworks, & Tools</h2>
      <div className="languages-container">{lan}</div>
    </div>
  );
};

export default SkillsContainer;

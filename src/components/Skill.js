import React from "react";

const Skill = ({ src, skill, darkMode }) => {
  return (
    <span className="skill">
      <img src={src} alt="skill-logo" />
      <p className={`${darkMode ? "dark-text" : ""}`}>{skill}</p>
    </span>
  );
};

export default Skill;

import React from "react";

const Skill = ({ src, skill, darkMode }) => {
  console.log(skill);
  return (
    <span className="skill">
      <img src={src} alt="" />
      <p className={`${darkMode ? "dark-text" : ""}`}>{skill}</p>
    </span>
  );
};

export default Skill;

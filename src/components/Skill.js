import React from "react";

const Skill = ({ src, skill }) => {
  return (
    <span className="skill">
      <img src={src} alt="" />
      <span className="skill-lang">{skill}</span>
    </span>
  );
};

export default Skill;

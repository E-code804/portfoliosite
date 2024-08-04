import React from "react";

const SkillBubble = ({ name }) => {
  return (
    <div className="skill-bubble-container">
      <img src={`assets/skills/` + name + `.svg`} alt="" />
      <h3>{name}</h3>
    </div>
  );
};

export default SkillBubble;

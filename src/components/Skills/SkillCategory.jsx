import React from "react";
import SkillBubble from "./SkillBubble";

const SkillCategory = ({ name, items }) => {
  return (
    <div className="skill-category-container" data-aos="fade-up">
      <div className="skill-title">
        <div className="arrow-img-container">
          <img src="assets/skills/arrow.svg" alt="arrow bullet" />
        </div>
        <h3>{name}</h3>
      </div>
      <div className="skills_container">
        {items.map((item, idx) => (
          <SkillBubble name={item} key={idx} />
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;

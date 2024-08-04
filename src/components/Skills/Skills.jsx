import React from "react";
import SkillCategory from "./SkillCategory";
import "./Skills.css";
import { SkillItems } from "./SkillsItems";

const Skills = (props) => {
  return (
    <section className="skills_section">
      <h1 className="skills-title section_title" data-aos="fade-up">
        Skills
      </h1>
      <div className="skills-list">
        {SkillItems.map((skill, idx) => (
          <SkillCategory
            name={skill.name}
            items={skill.items}
            key={idx}
          ></SkillCategory>
        ))}
      </div>
    </section>
  );
};

export default Skills;

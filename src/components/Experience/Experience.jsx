import React, { useState } from "react";
import "./Experience.css";
import { ExperienceItems } from "./ExperienceItems";
import TabContent from "./TabContent";

const Experience = () => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className="experience_section" id="experience" data-aos="fade-up">
      <h3 className="experience_title section_title">Experience</h3>
      <div className="experience_container">
        <ul className="tabs-container">
          {ExperienceItems.map((experience, idx) => (
            <li
              className={`tab-item ${idx === activeTab ? "active" : ""}`}
              onClick={() => setActiveTab(idx)}
              key={idx}
            >
              {experience.company}
            </li>
          ))}
        </ul>
        <TabContent tab={ExperienceItems[activeTab]} />
      </div>
    </section>
  );
};

export default Experience;

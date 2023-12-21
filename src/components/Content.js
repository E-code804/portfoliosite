import React from "react";
import About from "./About";
import ProjectsContainer from "./ProjectsContainer.js";
import SkillsContainer from "./SkillsContainer";

const Content = ({ darkMode }) => {
  return (
    <div className={`content ${darkMode ? "dark-bg" : ""}`}>
      <About darkMode={darkMode} />
      <SkillsContainer darkMode={darkMode} />
      <h1 id="project-header" className={`${darkMode ? "dark-text" : ""}`}>
        Projects
      </h1>
      <ProjectsContainer darkMode={darkMode} />
    </div>
  );
};

export default Content;

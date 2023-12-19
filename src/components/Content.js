import React from "react";
import About from "./About";
import ProjectsContainer from "./ProjectsContainer.js";
import SkillsContainer from "./SkillsContainer";

const Content = () => {
  return (
    <div className="content">
      <About />
      <SkillsContainer />
      <h1>Projects</h1>
      <ProjectsContainer />
    </div>
  );
};

export default Content;

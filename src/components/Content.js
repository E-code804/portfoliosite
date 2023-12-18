import React from "react"
import About from "./About"
import SkillsContainer from "./SkillsContainer"
import ProjectsContainer from "./ProjectsContainer.js";

function Content() {
    return (
      <div className="content">
        <About />
        <SkillsContainer />
        <h1>Projects</h1>
        <ProjectsContainer />
      </div>
    );
}

export default Content;
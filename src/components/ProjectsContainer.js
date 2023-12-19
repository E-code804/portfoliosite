import React from "react";
import projects from "../projects-data";
import Project from "./Project";

const ProjectsContainer = ({ darkMode }) => {
  const proj = projects.map((item, index) => (
    <Project key={index} darkMode={darkMode} string={item.title} {...item} />
  ));

  return <div className="projects-container">{proj}</div>;
};

export default ProjectsContainer;

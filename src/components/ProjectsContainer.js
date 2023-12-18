import React from "react";
import projects from "../projects-data";
import Project from "./Project";

function ProjectsContainer() {
  const proj = projects.map((item, index) => (
    <Project key={index} string={item.title} {...item} />
  ));

  return <div className="projects-container">{proj}</div>;
}

export default ProjectsContainer;

import React from "react";
import DisplayWork from "./DisplayWork";
import { Projects } from "./Projects/Projects";
import "./Work.css";

const Work = () => {
  const projectTypes = Object.keys(Projects);

  return (
    <section className="work_section" id="work">
      <h1 className="work_title section_title" data-aos="fade-up">
        Work I've done in...
      </h1>

      {projectTypes.map((key, idx) => {
        return <DisplayWork projectType={key} projects={Projects[key]} key={idx} />;
      })}
    </section>
  );
};

export default Work;

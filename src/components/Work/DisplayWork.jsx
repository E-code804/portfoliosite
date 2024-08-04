import React from "react";
import WorkCard from "./WorkCard";

const DisplayWork = ({ projectType, projects }) => {
  return (
    <>
      <h1 className="project-type">{projectType}</h1>
      <div className="work_cards_container" data-aos="fade-up">
        {projects.map((work, index) => (
          <WorkCard
            name={work.name}
            utilized={work.utilized}
            desc={work.description}
            links={work.links}
            key={index}
            hyperlink={work.hyperlink}
          />
        ))}
      </div>
    </>
  );
};

export default DisplayWork;

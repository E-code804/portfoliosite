import React from "react";

const WorkCard = ({ name, utilized, desc, links, hyperlink }) => {
  return (
    <a
      href={hyperlink ? hyperlink : ""}
      target="_blank"
      className="workcard-container"
      rel="noreferrer"
    >
      <div className="project_header">
        <h1>{name}</h1>
        <div className="project_links">
          {links.map((link, index) => (
            <a href={link.url} target="_blank" rel="noopener noreferrer" key={index}>
              <i className={link.icon}></i>
            </a>
          ))}
        </div>
      </div>

      <div className="workcard_details">
        <p>{desc}</p>
        <div className="utilized-container">
          {utilized.map((name, idx) => (
            <h3 key={idx}>{name}</h3>
          ))}
        </div>
      </div>
    </a>
  );
};

export default WorkCard;

import React from "react";

const WorkCard = ({ name, utilized, desc, links, hyperlink }) => {
  const handleClick = () =>
    hyperlink && window.open(hyperlink, "_blank", "noopener,noreferrer");

  return (
    <div onClick={handleClick} className="workcard-container">
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
    </div>
  );
};

export default WorkCard;

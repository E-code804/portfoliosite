import React from "react"

function Skill(props) {
  return (
    <span className="skill">
        <img src={props.src} alt=""/>
        <span className="skill-lang">{props.skill}</span>
    </span>
  );
}

export default Skill;

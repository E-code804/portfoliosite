import React from "react";
import Typewriter from "typewriter-effect";

let img = require("../assets/about/erik.jpeg");

const About = ({ darkMode }) => {
  return (
    <div className="about-section">
      <div className="description">
        <h1 className={`main-h1 ${darkMode ? "dark-about-mains" : ""}`}>
          Hello! My name is
        </h1>
        <h2 className={`about-name ${darkMode ? "dark-text" : ""}`}>
          Erik Pfeffer.
        </h2>
        <div className={`bio ${darkMode ? "dark-text" : ""}`}>
          <p>
            I am a Computer Science and Statistics undergraduate at the
            University of Maryland, CP with a passion for{" "}
          </p>
          <span className={`typewriter ${darkMode ? "dark-about-mains" : ""}`}>
            <Typewriter
              options={{ loop: true }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("problem solving.")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("machine learning.")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("software engineering.")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("full-stack.")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("data science.")
                  .pauseFor(1500)
                  .deleteAll()
                  .typeString("statistics.")
                  .pauseFor(1500)
                  .deleteAll()
                  .start();
              }}
            />
          </span>
        </div>
      </div>
      <div className="img-container">
        <img className="img prof" src={img} alt="" />
      </div>
    </div>
  );
};

export default About;

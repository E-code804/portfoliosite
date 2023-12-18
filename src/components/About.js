import React from "react";
import Typewriter from "typewriter-effect";

let img = require("../assets/about/erik.jpeg");

function About() {
  return (
    <div className="about-section">
      <div className="description">
        <h1>Hello! My name is</h1>
        <h2>Erik Pfeffer.</h2>
        <div className="bio">
          <p>
            I am a Computer Science and Statistics undergraduate at the
            University of Maryland, CP with a passion for{" "}
          </p>
          <span className="typewriter">
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
                  .typeString("full stack development.")
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
}

export default About;

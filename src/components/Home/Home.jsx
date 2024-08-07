import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { HashLink } from "react-router-hash-link";
import { Typewriter } from "react-simple-typewriter";
import "./Home.css";
// import Guy from "./guy-image.png";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 100 });
  }, []);

  return (
    <section className="home section" id="home">
      <div className="home_content grid">
        <div className="home_data">
          <h1 data-aos="fade-up" data-aos-delay="700">
            Hi, my name is
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="750">
            Erik Pfeffer
          </h2>
          <p data-aos="fade-up" data-aos-delay="800">
            I'm a Computer Science and Statistics student at the University of
            Maryland, College Park with a passion for{" "}
            <br className="about_break"></br>
            <Typewriter
              words={[
                "problem solving.",
                "software engineering.",
                "full-stack.",
                "data science.",
                "statistics.",
                "the outdoors.",
              ]}
              loop={0}
              cursor
              cursorStyle="|"
              typeSpeed={120}
              deleteSpeed={100}
              delaySpeed={600}
            />
          </p>
          <HashLink
            smooth
            to="/#contact"
            className="home_button"
            data-aos="fade-up"
            data-aos-delay="850"
          >
            Contact Me
          </HashLink>
        </div>
        <div className="home_img" data-aos="fade-left" data-aos-delay="1500">
          {/* For local Purposes */}
          {/* <img id="home-pfp" src={Guy} alt="Erik Pfeffer Cartoon Profile" /> */}
          <img
            id="home-pfp"
            src="assets/guy-image.png"
            alt="Erik Pfeffer Cartoon Profile"
          />
        </div>
      </div>
      <div className="home_scroll">
        <HashLink
          className="scroll_button"
          smooth
          to="/#about"
          data-aos="fade-up"
          data-aos-delay="1000"
        >
          <img className="mouse_img" src="assets/mouse.svg" alt="mouse" />
          <span>Scroll down</span>
          <i className="fa-solid fa-arrow-down"></i>
        </HashLink>
      </div>
    </section>
  );
}

export default Home;

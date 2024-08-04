import React from "react";
import "./Socials.css";

function Socials() {
  return (
    <section className="socials">
      <div
        className="socials_container side_float"
        data-aos="fade"
        data-aos-delay="2000"
      >
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/erik-pfeffer-288347223/"
        >
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://github.com/E-code804" target="_blank" rel="noreferrer">
          <i className="fa-brands fa-github"></i>
        </a>
      </div>
      <div
        className="side_email_container side_float"
        data-aos="fade"
        data-aos-delay="2000"
      >
        <a href="mailto:erikpfeffer5@gmail.com">erikpfeffer5@gmail.com</a>
      </div>
    </section>
  );
}

export default Socials;

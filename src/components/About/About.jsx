import React from "react";
import "./About.css";

function About() {
  return (
    <section className="about_section" id="about" data-aos="fade-up">
      <h1 className="about_title section_title">About Me</h1>
      <div className="about_content">
        <div className="about_data">
          <p>
            I'm a Senior at UMD majoring in
            <span> Computer Science</span> and minoring in <span>Statistics</span>.
          </p>
          <p>
            I am a passionate programmer interested in the fields of{" "}
            <span>
              software engineering, full stack development, and data science.
            </span>{" "}
            I have a thirst for continuous learning to enhance my skill set coupled
            with strong interpersonal skills to effectively collaborate with team
            members and stakeholders. I am currently seeking a Software
            Engineering/Data Science role for full-time or internship.
          </p>
        </div>
        <div className="about_image">
          <div className="about_img_container">
            <img src="assets/erik.jpeg" alt="Erik Profile Pic" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

import React from "react";

import About from "./components/About/About";
import ContactMe from "./components/Contact Me/ContactMe";
import Experience from "./components/Experience/Experience";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Work from "./components/Work/Work";

const Content = () => {
  return (
    <div className="content">
      <Home />
      <About />
      <Experience />
      <Skills />
      <Work />
      <ContactMe />
    </div>
  );
};

export default Content;

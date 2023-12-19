import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <footer className={`footer ${darkMode ? "dark-text dark-bg" : ""}`}>
      Made by Erik Pfeffer.
    </footer>
  );
};

export default Footer;

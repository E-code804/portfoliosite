import Aos from "aos";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Socials from "./components/Socials/Socials";
import Stars from "./components/Stars/Stars";
import Content from "./Content";

function App() {
  useEffect(() => {
    Aos.init({ disable: "mobile", duration: 1500, once: true });
  }, []);

  const getTheme = () => {
    let currTheme = localStorage.getItem("theme");

    if (currTheme) {
      return currTheme;
    } else return "dark";
  };

  const [theme, setTheme] = useState(getTheme());

  const toggleTheme = () => {
    let newTheme = theme === "light" ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <Router>
      <div className="app" id="App" data-theme={theme}>
        <Stars />
        <Navbar theme={theme} toggleTheme={toggleTheme} />

        <Content />

        <Socials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;

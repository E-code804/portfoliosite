import { useState } from "react";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className="app">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Content darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;

import { useState, useEffect } from "react";
import About from './components/About'
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from './components/Navbar'
import Portfolio from "./components/Portfolio";
import './App.css'

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div className={`app ${theme}`}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About theme={theme} />
      <Portfolio theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </div>
  );
};

export default App

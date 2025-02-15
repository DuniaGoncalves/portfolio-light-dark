import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./components/styles/themes";
import GlobalStyles from './components/styles/GlobalStyles'; 
import About from './components/About'
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from './components/Navbar'
import Portfolio from "./components/Portfolio";

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
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme }>
      <GlobalStyles />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <About theme={theme} />
      <Portfolio theme={theme} />
      <Contact theme={theme} />
      <Footer theme={theme} />
    </ThemeProvider>
  );
};

export default App

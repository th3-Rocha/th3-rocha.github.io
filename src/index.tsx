import React, { useContext, useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./translations/LanguageContext";
import { ThemeProvider } from "./theme/ThemeProvider";
import { createRoot } from "react-dom/client";


function App() {
  // Check localStorage for the theme preference on initial load
  const [isDark, setIsDark] = useState(() => {
    const savedTheme = localStorage.getItem("isDark");
    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("isDark", JSON.stringify(newTheme));
  };
  
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider darkMode={isDark}>
          <div>
            <Routes>
              <Route path="/" element={<Home toggleDarkTheme={toggleTheme} />} />
              <Route path="/about" element={<About toggleDarkTheme={toggleTheme} />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </ThemeProvider>
      </LanguageProvider>
    </Router>
  );
}

const root = createRoot(document.getElementById("root")!);

root.render(<App />);

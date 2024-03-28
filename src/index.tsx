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
import { ThemeProvider, ThemeContext } from "./theme/ThemeProvider";
import { createRoot } from "react-dom/client";
import { useParams } from "react-router-dom";




function App() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    console.log(isDark);
  };
  

  return (
    <Router>
      <LanguageProvider>
        <ThemeProvider darkMode={isDark}>
          <div>
            <Routes>
              <Route path="/" element={<Home  toggleDarkTheme={toggleTheme}/>}  />
              <Route path="/about" element={<About />} />
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

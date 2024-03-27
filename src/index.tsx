import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  HashRouter,
} from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./translations/LanguageContext";
import { ThemeProvider } from "./theme/ThemeProvider";
import minimalistic from "./theme/themes/minimalistic";
import { createRoot } from "react-dom/client";

function App() {
  //HasRouter becaouse of github
  return (
      <Router>
        <LanguageProvider>
          <ThemeProvider initialTheme={minimalistic}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </ThemeProvider>
        </LanguageProvider>
      </Router>
  );
}

const root = createRoot(document.getElementById("root")!);

root.render(<App />);

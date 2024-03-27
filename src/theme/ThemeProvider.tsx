import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "./themes/theme";
import minimalisticTheme from "./themes/minimalistic";
import joyfulTheme from "./themes/joyfull";
import hightecTheme from "./themes/highTech";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: minimalisticTheme, // Replace with your default theme
  toggleTheme: () => {},
});

interface ThemeProviderProps {
  children: React.ReactNode;
  initialTheme: Theme; // Add initialTheme prop
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  initialTheme,
}) => {
  const [theme, setTheme] = useState<Theme>(initialTheme);

  const toggleTheme = () => {
    // Implement theme switching logic here
    switch (theme) {
      case minimalisticTheme:
        setTheme(joyfulTheme);
        break;
      case joyfulTheme:
        setTheme(hightecTheme);
        break;
      case hightecTheme:
        setTheme(minimalisticTheme);
        break;
      default:
        setTheme(minimalisticTheme);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

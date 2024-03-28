import React, { createContext, useState } from "react";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { Theme } from "./themes/theme";
import minimalisticTheme from "./themes/minimalistic";
import minimalisticDarkTheme from "./themes/minimalisticDark";
import { useContext, useEffect } from "react";

interface ThemeContextProps {
  darkT: boolean;
  theme: Theme;
}

export const ThemeContext = createContext<ThemeContextProps>({
  darkT: false,
  theme: minimalisticTheme,
});

interface ThemeProviderProps {
  children: React.ReactNode;
  darkMode: boolean; 
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, darkMode }) => {
  const [darkT, setDarkT] = useState<boolean>(darkMode);
  let theme = darkT ? minimalisticDarkTheme : minimalisticTheme;

  useEffect(() => {
    theme = darkT ? minimalisticDarkTheme : minimalisticTheme;
    setDarkT(darkMode);
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkT, theme }}>
      <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
    </ThemeContext.Provider>
  );
};

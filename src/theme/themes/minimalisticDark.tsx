import { Theme } from "./theme";

const minimalisticDark: Theme = {
  colors: {
    primary: "#4c956c", // Lighter green for primary elements in dark mode
    secondary: "#2c6e49", // Darker green for secondary elements
    background: "#1a2721", // Very dark green for background
    text: "#e0e7e3", // Light grey-green for text to contrast well with the dark background
    icon: "#6eab8e", // A softer, lighter green for icons
    footerLine: "#4c956c66", // Lighter green for footer lines with transparency
    footerLineHard: "#6eab8e", // A stronger, lighter green for harder lines in the footer
  },
  fonts: {
    primary: "Montserrat, sans-serif",
    secondary: "Montserrat, sans-serif",
  },
};
export default minimalisticDark;

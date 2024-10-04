import { Theme } from "./theme";

const minimalisticDark: Theme = {
  colors: {
    primary: "#000000", 
    secondary: "#333333",
    background: "#FEA501", // Light sepia for background
    text: "#000000", // Darker brown for text to contrast well with the background
    icon: "#8b6b52", // A softer brown for icons
    footerLine: "#a67c5266", // Lighter sepia for footer lines with transparency
    footerLineHard: "#8b6b52", // A stronger sepia for harder lines in the footer
  },
  fonts: {
    primary: "Montserrat, sans-serif",
    secondary: "Montserrat, sans-serif",
  },
};
export default minimalisticDark;

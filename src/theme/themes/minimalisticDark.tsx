import { Theme } from "./theme";

const minimalisticDark: Theme = {
  colors: {
    primary: "#000000", 
    secondary: "#33333349",
    background: "#FEA501", // Light sepia for background
    text: "#000000", // Darker brown for text to contrast well with the background
    icon: "#8b6b52", // A softer brown for icons
    footerLine: "#a67c5266", // Lighter sepia for footer lines with transparency
    footerLineHard: "#8b6b52", // A stronger sepia for harder lines in the footer
    filterForce: 1
  },
  fonts: {
    primary: "Montserrat, sans-serif",
    secondary: "Montserrat, sans-serif",
  },
  screen:{
    mobile: "600px",
    tablet: "1100px",
    desktop: "2000px",
  }
};
export default minimalisticDark;

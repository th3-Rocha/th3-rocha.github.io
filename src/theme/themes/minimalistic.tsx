import { Theme } from './theme';

const minimalistic: Theme = {
  colors: {
    primary: "#644536", // Dark sepia tone for primary elements
    secondary: "#d4aa7d", // Lighter sepia tone for secondary elements
    background: "#ffe0b5", // Light sepia for background
    text: "#5b4636", // Darker brown for text to contrast well with the background
    icon: "#8b6b52", // A softer brown for icons
    footerLine: "#a67c5266", // Lighter sepia for footer lines with transparency
    footerLineHard: "#8b6b52", // A stronger sepia for harder lines in the footer
    filterForce: 0.5
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

export default minimalistic;



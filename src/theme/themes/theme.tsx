export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    icon: string;
    footerLine: string;
    footerLineHard: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  screen:{
    mobile: number;
    tablet: number;
    desktop: number;
  };
}

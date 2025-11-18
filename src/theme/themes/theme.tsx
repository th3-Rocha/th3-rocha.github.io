export interface Theme {
  colors: {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    icon: string;
    footerLine: string;
    footerLineHard: string;
    filterForce: number;
  };
  fonts: {
    primary: string;
    secondary: string;
    main?: string;
  };
  screen: {
    mobile: string;
    tablet: string;
    desktop: string;
  };
}

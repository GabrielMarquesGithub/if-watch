const theme = {
  colors: {
    background: {
      primary: "#17191B",
      secondary: "#282E33",
      tertiary: "#444A51",
    },
    translucentBackground: {
      primary: "rgba(23, 25, 27, 0.80)",
      secondary: "rgba(40, 46, 51, 0.80)",
      tertiary: "rgba(68, 74, 81, 0.80)",
    },
    text: {
      light: "#F8F9FA",
    },
    icon: {
      light: "#F8F9FA",
    },
    brand: {
      primary: "#FDCA40",
    },
    translucentBrand: {
      primary: "rgb(253, 202, 64, 0.25)",
    },
    semantic: {
      success: "#00CC66",
      error: "#DF2935",
      info: "#3772FF",
    },
  },
  typography: {
    fontFamily: {
      normal: "Roboto, sans-serif",
      style: "Orbitron, sans-serif",
    },
    fontWeight: {
      normal: 400,
      bold: 700,
    },
    fontSize: {
      small: "12px",
      base: "18px",
      big: "24px",
      huge: "35px",
    },
  },
  spacing: {
    5: "5px",
    10: "10px",
    15: "15px",
    20: "20px",
    25: "25px",
  },
  container: {
    large: "940px",
  },
  borderRadius: {
    base: "10px",
  },
  transition: {
    fast: "100ms",
    normal: "200ms",
    slow: "400ms",
  },
  filter: {
    blur: "blur(5px)",
    brightness: "brightness(0.8)",
  },
};

export default theme;

type themeType = typeof theme;

// Sobrescrevendo o tema do styled-components
declare module "styled-components" {
  export interface DefaultTheme extends themeType {}
}

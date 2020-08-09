/**
 * Base tokens.
 */

// Color Tokens
export const palette = {
  neutrals: {
    0: "#FFFFFF",
    10: "#FAFBFC",
    20: "#F4F5F7",
    30: "#EBECF0",
    40: "#DFE1E6",
    50: "#C1C7D0",
    60: "#B3BAC5",
    70: "#A5ADBA",
    80: "#97A0AF",
    90: "#8993A4",
    100: "#7A869A",
    200: "#6B778C",
    300: "#5E6C84",
    400: "#505F79",
    500: "#42526E",
    600: "#344563",
    700: "#253858",
    800: "#172B4D",
    900: "#061938",
  },
  red: {
    50: "#FFEBE6",
    75: "#FFBDAD",
    100: "#FF8F73",
    200: "#FF7452",
    300: "#FF5630",
    400: "#DE350B",
    500: "#B92500",
  },
  yellow: {
    50: "#FFFAE6",
    75: "#FFF0B3",
    100: "#FFE380",
    200: "#FFC400",
    300: "#FFAB00",
    400: "#FF991F",
    500: "#FF8B00",
  },
  green: {
    50: "#E3FCEF",
    75: "#ABF5D1",
    100: "#79F2C0",
    200: "#57D9A3",
    300: "#36B37E",
    400: "#00875A",
    500: "#006644",
  },
  teal: {
    50: "#E6FCFF",
    75: "#B3F5FF",
    100: "#79E2F2",
    200: "#00C7E6",
    300: "#00B8D9",
    400: "#00A3BF",
    500: "#008DA6",
  },
  blue: {
    50: "#DEEBFF",
    75: "#B3D4FF",
    100: "#4C9AFF",
    200: "#2684FF",
    300: "#0065FF",
    400: "#0052CC",
    500: "#0747A6",
  },
  purple: {
    50: "#EAE6FF",
    75: "#C0B6F2",
    100: "#998DD9",
    200: "#8777D9",
    300: "#6554C0",
    400: "#5243AA",
    500: "#403294",
  },
};

export const gradients = {
  default: {
    light: `linear-gradient(180deg, ${palette.neutrals["10"]} 0%, ${palette.neutrals["20"]} 100%)`,
    base: `linear-gradient(180deg, ${palette.neutrals["10"]} 0%, ${palette.neutrals["40"]} 100%)`,
    dark: `linear-gradient(180deg, ${palette.neutrals["10"]} 0%, ${palette.neutrals["60"]} 100%)`,
  },
};

// Typography Tokens
export const fonts = {
  heading: '"Inter", sans-serif',
  body: '"Inter", sans-serif',
  monospace: "Menlo, monospace",
};

export const fontSizes = {
  displayXLarge: "42px",
  displayLarge: "28px",
  displayMedium: "26px",
  displaySmall: "20px",
  heading: "16px",
  body: "14px",
  caption: "12px",
};

export const lineHeights = {
  displayXLarge: "44px",
  displayLarge: "32px",
  displayMedium: "32px",
  displaySmall: "24px",
  heading: "24px",
  subHeading: "16px",
  caption: "16px",
  body: "20px",
};

export const fontWeights = {
  regular: 400,
  medium: 500,
  bold: 700,
};

export const letterSpacings = {
  default: "normal",
};

// Border tokens
export const radii = {
  none: 0,
  regular: 3,
};
export const borderWidths = {
  none: 0,
  regular: 1,
  thick: 2,
};
export const borderStyles = {
  regular: "solid",
};

// Shadow tokens
export const shadows = {
  100: "0px 0px 2px rgba(23, 43, 77, 0.04), 0px 3px 2px rgba(23, 43, 77, 0.08)",
  200: "0px 3px 2px rgba(23, 43, 77, 0.04), 0px 5px 3px rgba(23, 43, 77, 0.08)",
  300: "0px 5px 3px rgba(23, 43, 77, 0.04), 0px 8px 5px rgba(23, 43, 77, 0.08)",
  400: "0px 8px 5px rgba(23, 43, 77, 0.04), 0px 15px 12px rgba(23, 43, 77, 0.08)",
  500: "0px 18px 12px rgba(23, 43, 77, 0.04), 0px 24px 18px rgba(23, 43, 77, 0.08)",
  600: "0px 24px 18px rgba(23, 43, 77, 0.04), 0px 35px 24px rgba(23, 43, 77, 0.08)",
};

// Spacing Tokens
export const space = [0, 4, 8, 16, 32, 64, 128, 256, 512];
export const sizes = [8, 16, 32, 64, 128, 256, 512, 768, 1024, 1536];
export const breakpoints = ["40em", "56em", "64em"];

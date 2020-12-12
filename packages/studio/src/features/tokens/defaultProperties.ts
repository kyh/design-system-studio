export interface TokenSetRecord {
  [key: string]: TokenSet;
}

export interface TokenSet {
  name: string;
  description?: string;
  values: TokenSetRecord | Token;
}

export interface Token {
  [key: string]: string | number;
}

export const defaultTokensState: TokenSetRecord = {
  typography: {
    name: "Typography",
    description:
      "Our design system leverages a limited, purposeful set of typographic styles. These styles map as much as possible to functional roles so you know when each can be used.",
    values: {
      fontFamily: {
        name: "Font Family",
        values: {
          heading: '"Inter", sans-serif',
          body: '"Inter", sans-serif',
          monospace: "Menlo, monospace",
        },
      },
      fontSize: {
        name: "Font Sizes",
        values: {
          xl: "42px",
          lg: "28px",
          md: "26px",
          sm: "20px",
          heading: "16px",
          subHeading: "16px",
          body: "14px",
          caption: "12px",
        },
      },
      lineHeight: {
        name: "Line Heights",
        values: {
          xl: "44px",
          lg: "32px",
          md: "32px",
          sm: "24px",
          heading: "24px",
          subHeading: "16px",
          body: "20px",
          caption: "16px",
        },
      },
      fontWeight: {
        name: "Font weights",
        values: {
          normal: 400,
          medium: 500,
          bold: 700,
        },
      },
      letterSpacing: {
        name: "Letter Spacings",
        values: {
          normal: "normal",
        },
      },
    },
  },
  color: {
    name: "Colors",
    description:
      "Our primary palette is comprised of neutrals, white, and our primary blue. These colors are interchangeable however, and you’re encouraged to do so, to embed your own branding.",
    values: {
      neutral: {
        name: "Neutrals",
        values: {
          dark: {
            name: "Dark",
            values: {
              500: "#42526E",
              600: "#344563",
              700: "#253858",
              800: "#172B4D",
              900: "#061938",
            },
          },
          mid: {
            name: "Mid",
            values: {
              60: "#B3BAC5",
              70: "#A5ADBA",
              80: "#97A0AF",
              90: "#8993A4",
              100: "#7A869A",
              200: "#6B778C",
              300: "#5E6C84",
              400: "#505F79",
            },
          },
          light: {
            name: "Light",
            values: {
              0: "#FFFFFF",
              10: "#FAFBFC",
              20: "#F4F5F7",
              30: "#EBECF0",
              40: "#DFE1E6",
              50: "#C1C7D0",
            },
          },
        },
      },
      red: {
        name: "Red",
        description:
          "Red is reserved for error states to draw attention to important information or actions that are destructive or further action.",
        values: {
          50: "#FFEBE6",
          75: "#FFBDAD",
          100: "#FF8F73",
          200: "#FF7452",
          300: "#FF5630",
          400: "#DE350B",
          500: "#B92500",
        },
      },
      yellow: {
        name: "Yellow",
        description:
          "Yellow is reserved for warning states to draw attention to important information. Yellow pairs greatly in badges, pills, and banners.",
        values: {
          50: "#FFFAE6",
          75: "#FFF0B3",
          100: "#FFE380",
          200: "#FFC400",
          300: "#FFAB00",
          400: "#FF991F",
          500: "#FF8B00",
        },
      },
      green: {
        name: "Green",
        description:
          "Green is used to indicate success or to celebrate an achievement.",
        values: {
          50: "#E3FCEF",
          75: "#ABF5D1",
          100: "#79F2C0",
          200: "#57D9A3",
          300: "#36B37E",
          400: "#00875A",
          500: "#006644",
        },
      },
      teal: {
        name: "Teal",
        values: {
          50: "#E6FCFF",
          75: "#B3F5FF",
          100: "#79E2F2",
          200: "#00C7E6",
          300: "#00B8D9",
          400: "#00A3BF",
          500: "#008DA6",
        },
      },
      blue: {
        name: "Blue",
        values: {
          50: "#DEEBFF",
          75: "#B3D4FF",
          100: "#4C9AFF",
          200: "#2684FF",
          300: "#0065FF",
          400: "#0052CC",
          500: "#0747A6",
        },
      },
      purple: {
        name: "Purple",
        values: {
          50: "#EAE6FF",
          75: "#C0B6F2",
          100: "#998DD9",
          200: "#8777D9",
          300: "#6554C0",
          400: "#5243AA",
          500: "#403294",
        },
      },
    },
  },
  measurement: {
    name: "Measurements",
    description: "",
    values: {
      space: {
        name: "Spacing",
        values: {
          none: "0",
          xs: "4px",
          sm: "8px",
          md: "12px",
          lg: "16px",
          xl: "20px",
          xl32: "32px",
          xl40: "40px",
        },
      },
      size: {
        name: "Sizing",
        values: {
          none: "0",
          xs: "12px",
          sm: "16px",
          md: "20px",
          lg: "24px",
          xl: "32px",
          xl40: "40px",
          xl52: "52px",
          xl60: "60px",
          xl64: "64px",
        },
      },
    },
  },
  border: {
    name: "Border Tokens",
    description: "",
    values: {
      radii: {
        name: "Border Radius",
        values: {
          none: "0px",
          normal: "3px",
        },
      },
      borderWidth: {
        name: "Border Width",
        values: {
          none: "0px",
          normal: "1px",
          thick: "2px",
        },
      },
      borderStyle: {
        name: "Border Styles",
        values: {
          solid: "solid",
        },
      },
    },
  },
  depth: {
    name: "Depth",
    values: {
      shadows: {
        name: "Elevation",
        values: {
          xs:
            "0px 0px 2px rgba(23, 43, 77, 0.04), 0px 3px 2px rgba(23, 43, 77, 0.08)",
          sm:
            "0px 3px 2px rgba(23, 43, 77, 0.04), 0px 5px 3px rgba(23, 43, 77, 0.08)",
          md:
            "0px 5px 3px rgba(23, 43, 77, 0.04), 0px 8px 5px rgba(23, 43, 77, 0.08)",
          lg:
            "0px 8px 5px rgba(23, 43, 77, 0.04), 0px 15px 12px rgba(23, 43, 77, 0.08)",
          xl:
            "0px 18px 12px rgba(23, 43, 77, 0.04), 0px 24px 18px rgba(23, 43, 77, 0.08)",
        },
      },
    },
  },
  animation: {
    name: "Animations",
    values: {
      transitions: {
        name: "Transitions",
        values: {
          fast: "0.1s cubic-bezier(0.3, 0, 0.5, 1)",
        },
      },
    },
  },
};

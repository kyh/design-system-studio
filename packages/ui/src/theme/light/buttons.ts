import { palette } from "../shared-tokens";

const buttonBaseStyles = {
  position: "relative",
  fontFamily: "body",
  fontSize: "body",
  fontWeight: "regular",
  lineHeight: "body",
  borderRadius: "regular",
  borderWidth: "regular",
  borderStyle: "regular",
  pt: 2,
  pb: 2,
  pl: 3,
  pr: 3,
  cursor: "pointer",
};

export const buttons = {
  basic: {
    ...buttonBaseStyles,
    color: palette.neutrals["800"],
    backgroundColor: `linear-gradient(180deg, ${palette.neutrals[10]} 0%, ${palette.neutrals["40"]} 100%)`,
    borderColor: "default.base",
    "&.hover, &:hover": {
      backgroundColor: "default.light",
      borderColor: "default.base",
    },
    "&.active, &:active": {
      backgroundColor: "default.light",
      borderColor: "default.dark",
    },
    "&.focus, &:focus": {
      backgroundColor: `linear-gradient(180deg, ${palette.neutrals[10]} 0%, ${palette.neutrals["40"]} 100%)`,
      borderColor: palette.blue[300],
    },
    "&.disabled, &:disabled": {
      backgroundColor: `linear-gradient(180deg, ${palette.neutrals[10]} 0%, ${palette.neutrals[20]} 100%)`,
      borderColor: "default.base",
      cursor: "not-allowed",
    },
    "&.loading, &:loading": {
      backgroundColor: `linear-gradient(180deg, ${palette.neutrals[10]} 0%, ${palette.neutrals[20]} 100%)`,
      borderColor: "default.base",
      cursor: "not-allowed",
    },
  },
  primary: {
    ...buttonBaseStyles,
    color: palette.neutrals[10],
    backgroundColor: palette.blue[300],
    borderColor: "primary.dark",
    "&.hover, &:hover": {
      backgroundColor: "primary.dark",
      borderColor: "primary.border",
    },
    "&.active, &:active": {
      backgroundColor: "primary.border",
      borderColor: "primary.border",
    },
    "&.focus, &:focus": {
      backgroundColor: palette.blue[300],
      borderColor: "primary.border",
    },
    "&.disabled, &:disabled": {
      backgroundColor: "primary.background",
      borderColor: "primary.light",
      cursor: "not-allowed",
    },
    "&.loading, &:loading": {
      backgroundColor: "primary.background",
      borderColor: "primary.light",
      cursor: "not-allowed",
    },
  },
};

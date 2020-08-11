import styled from "styled-components";
import { variant } from "styled-system";
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from "util/system-functions";

export type TextProps = {
  variant?: "body" | "caption" | "hint" | "label";
} & TypographyFunctionsProps;

const defaultextStyles = {
  fontFamily: "body",
  fontWeight: "regular",
  color: "page.color",
  mt: 0,
  mb: 0,
};

export const textVariants = {
  body: {
    ...defaultextStyles,
    fontSize: "body",
    lineHeight: "body",
  },
  caption: {
    ...defaultextStyles,
    fontSize: "caption",
    lineHeight: "caption",
  },
};

const v = variant({ variants: textVariants });

export const Text = styled.p<TextProps>`
  ${v}
  ${typographyFunctions}
`;

Text.defaultProps = {
  variant: "body",
};

import styled, { css } from "@xstyled/styled-components";
import { variant } from "@xstyled/system";
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from "../system-functions";

export type TextProps = {
  variant?: "body" | "heading" | string; // generated
} & TypographyFunctionsProps;

const base = css`
  margin: 0;
`;

// generated
const textVariants = {
  body: css`
    font-family: body;
    font-size: body;
    font-weight: body;
    color: text;
  `,
  heading: css`
    font-size: heading;
    font-family: heading;
    font-weight: medium;
    color: text;
  `,
};

const variants = variant({
  key: "text",
  default: "body",
  variants: textVariants,
});

export const Text = styled.p<TextProps>`
  ${base}
  ${typographyFunctions}
  ${variants}
`;

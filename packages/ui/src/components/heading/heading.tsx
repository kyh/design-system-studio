import styled from "styled-components";
import { variant } from "styled-system";
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from "util/system-functions";

type HeadingProps = {
  variant?:
    | "heading"
    | "subheading"
    | "displaySmall"
    | "displayMedium"
    | "displayLarge"
    | "displayXLarge";
} & TypographyFunctionsProps;

const defaultHeadingStyles = {
  fontFamily: "heading",
  fontWeight: "medium",
  lineHeight: "heading",
  color: "page.color",
  mt: 0,
  mb: 0,
};

const headingVariant = variant({
  variants: {
    heading: {
      ...defaultHeadingStyles,
      fontSize: "heading",
    },
    subheading: {
      ...defaultHeadingStyles,
      fontSize: "subheading",
    },
    displaySmall: {
      ...defaultHeadingStyles,
      fontSize: "displaySmall",
    },
    displayMedium: {
      ...defaultHeadingStyles,
      fontSize: "displayMedium",
    },
    displayLarge: {
      ...defaultHeadingStyles,
      fontSize: "displayLarge",
    },
    displayXLarge: {
      ...defaultHeadingStyles,
      fontSize: "displayXLarge",
    },
  },
});

export const Heading = styled.h1<HeadingProps>`
  ${headingVariant}
  ${typographyFunctions}
`;

Heading.defaultProps = {
  variant: "heading",
};

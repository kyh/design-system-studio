import styled, { css, system, SystemProps } from "@xstyled/styled-components";
import { variant as createVariant } from "@xstyled/system";

type DefaultProps = {
  variant?: "heading" | "subHeading" | "caption" | "body";
  displaySize?: "xl" | "lg" | "md" | "sm";
};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  font-family: heading;
  margin: 0;
`;

/* generated */
const variant = createVariant({
  key: "heading.variant",
  prop: "variant",
  default: "heading",
  variants: {
    heading: css<Props>`
      font-size: heading;
      line-height: heading;
      font-weight: normal;
    `,
    subHeading: css<Props>`
      font-size: subHeading;
      line-height: subHeading;
      font-weight: medium;
    `,
    caption: css<Props>`
      font-size: caption;
      line-height: caption;
      font-weight: normal;
    `,
    body: css<Props>`
      font-size: body;
      line-height: body;
      font-weight: normal;
    `,
  },
});

/* generated */
const displaySize = createVariant({
  key: "heading.displaySize",
  prop: "displaySize",
  default: "default",
  variants: {
    default: css<Props>``,
    xl: css<Props>`
      font-size: displayXl;
      line-height: displayXl;
    `,
    lg: css<Props>`
      font-size: displayLg;
      line-height: displayLg;
    `,
    md: css<Props>`
      font-size: displayMd;
      line-height: displayMd;
    `,
    sm: css<Props>`
      font-size: displaySm;
      line-height: displaySm;
    `,
  },
});

export const Heading = styled.h1<Props>`
  ${base}
  ${system}
  /* generated */
  ${variant}
  ${displaySize}
`;

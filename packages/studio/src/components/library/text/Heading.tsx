import styled, { css } from "@xstyled/styled-components";
import { variant as createVariant } from "@xstyled/system";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
  font-family: heading;
  margin: 0;
`;

/* generated */
const variant = createVariant({
  key: "heading.variant",
  prop: "variant",
  default: "heading",
  variants: {
    heading: css`
      font-size: heading;
      line-height: heading;
      font-weight: normal;
    `,
    subHeading: css`
      font-size: subHeading;
      line-height: subHeading;
      font-weight: medium;
    `,
    caption: css`
      font-size: caption;
      line-height: caption;
      font-weight: normal;
    `,
    body: css`
      font-size: body;
      line-height: body;
      font-weight: normal;
    `,
  },
});

/* generated */
const dsize = createVariant({
  key: "heading.dsize",
  prop: "dsize",
  default: "default",
  variants: {
    default: css``,
    xl: css`
      font-size: displayXl;
      line-height: displayXl;
    `,
    lg: css`
      font-size: displayLg;
      line-height: displayLg;
    `,
    md: css`
      font-size: displayMd;
      line-height: displayMd;
    `,
    sm: css`
      font-size: displaySm;
      line-height: displaySm;
    `,
  },
});

export const Heading = styled.h1<StyledProps>`
  ${base}
  ${system}
  /* generated */
  ${variant}
  ${dsize}
`;

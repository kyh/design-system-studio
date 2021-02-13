import styled, { css, system, SystemProps } from "@xstyled/styled-components";
import { variant as createVariants } from "@xstyled/system";

type DefaultProps = {
  shape?: "badge" | "pill"; // generated
  status?:
    | "default"
    | "inverted"
    | "primary"
    | "warning"
    | "error"
    | "success"
    | "info"; // generated
};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  display: inline-block;
  vertical-align: top;
  /* generated */
  font-size: caption;
  line-height: 1;
  padding: 2px 6px;
  font-weight: medium;
  border-style: solid;
  border-width: normal;
`;

/* generated */
const shape = createVariants({
  key: "avatar.shape",
  prop: "shape",
  default: "badge",
  variants: {
    badge: css<Props>`
      border-radius: sm;
    `,
    pill: css<Props>`
      border-radius: 30px;
    `,
  },
});

/* generated */
const status = createVariants({
  key: "avatar.status",
  prop: "status",
  default: "default",
  variants: {
    default: css<Props>`
      color: text;
      background-color: backgroundLight;
      border-color: borderColor;
    `,
    inverted: css<Props>`
      color: textInverse;
      background-color: backgroundInverse;
      border-color: backgroundInverseDark;
    `,
    primary: css<Props>`
      color: primaryDarker;
      background-color: primaryBackground;
      border-color: primaryLighter;
    `,
    warning: css<Props>`
      color: text;
      background-color: warningBackground;
      border-color: warningLighter;
    `,
    error: css<Props>`
      color: errorDarker;
      background-color: errorBackground;
      border-color: errorLighter;
    `,
    success: css<Props>`
      color: successDarker;
      background-color: successBackground;
      border-color: successLighter;
    `,
    info: css<Props>`
      color: infoDarker;
      background-color: infoBackground;
      border-color: infoLighter;
    `,
  },
});

export const Badge = styled.div<Props>`
  ${base}
  ${system}
  /* generated */
  ${shape}
  ${status}
`;

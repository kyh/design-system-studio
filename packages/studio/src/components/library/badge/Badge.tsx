import styled, { css } from "@xstyled/styled-components";
import {
  compose,
  variant as createVariants,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "@xstyled/system";

type DefaultProps = {
  fill?: boolean;
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

export type StyledProps = SpaceProps & PositionProps & DefaultProps;

const base = css`
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
    badge: css`
      border-radius: 30px;
    `,
    pill: css`
      border-radius: sm;
    `,
  },
});

/* generated */
const status = createVariants({
  key: "avatar.status",
  prop: "status",
  default: "default",
  variants: {
    default: css`
      color: text;
      background-color: backgroundLight;
      border-color: borderColor;
    `,
    inverted: css`
      color: textInverse;
      background-color: backgroundInverse;
      border-color: backgroundInverseDark;
    `,
    primary: css`
      color: primaryDarker;
      background-color: primaryBackground;
      border-color: primaryLighter;
    `,
    warning: css`
      color: text;
      background-color: warningBackground;
      border-color: warningLighter;
    `,
    error: css`
      color: errorDarker;
      background-color: errorBackground;
      border-color: errorLighter;
    `,
    success: css`
      color: successDarker;
      background-color: successBackground;
      border-color: successLighter;
    `,
    info: css`
      color: infoDarker;
      background-color: infoBackground;
      border-color: infoLighter;
    `,
  },
});

export const Badge = styled.div<StyledProps>`
  ${base}
  ${shape}
  /* generated */
  ${status}
  ${compose(space, position)}
`;

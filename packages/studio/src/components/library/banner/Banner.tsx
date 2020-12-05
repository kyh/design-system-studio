import styled, { css } from "@xstyled/styled-components";
import {
  compose,
  variant as createVariants,
  flexboxes,
  FlexboxesProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "@xstyled/system";

type DefaultProps = {
  status?: "warning" | "error"; // generated
};

export type StyledProps = FlexboxesProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  DefaultProps;

const base = css`
  display: flex;
  width: 100%;
  /* generated */
  padding: xl;
`;

/* generated */
const status = createVariants({
  key: "banner.status",
  prop: "status",
  default: "warning",
  variants: {
    warning: css`
      color: text;
      background-color: warning;
    `,
    error: css`
      color: textInverse;
      background-color: errorDarker;
    `,
  },
});

export const Banner = styled.div<StyledProps>`
  ${base}
  /* generated */
  ${status}
  ${compose(flexboxes, layout, position, space)}
`;

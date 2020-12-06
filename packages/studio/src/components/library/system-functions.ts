import { css } from "@xstyled/styled-components";
import {
  compose,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexboxes,
  FlexboxesProps,
  position,
  PositionProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
  backgrounds,
  BackgroundProps,
  border,
  BorderProps,
} from "@xstyled/system";

export type SystemProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxesProps &
  PositionProps &
  TypographyProps &
  BackgroundProps &
  BorderProps;

export const system = compose(
  space,
  color,
  layout,
  flexboxes,
  position,
  typography,
  backgrounds,
  border
);

export const focusRing = css`
  outline: 1px solid ${({ theme }) => theme.colors.primary};
`;

export const hidden = css`
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;

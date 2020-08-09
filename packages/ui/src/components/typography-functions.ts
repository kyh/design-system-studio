import {
  compose,
  space,
  SpaceProps,
  layout,
  LayoutProps,
  flexbox,
  FlexboxProps,
  position,
  PositionProps,
  color,
  ColorProps,
  typography,
  TypographyProps,
} from "styled-system";

export type TypographyFunctionsProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  TypographyProps;

export const typographyFunctions = compose(
  space,
  color,
  layout,
  flexbox,
  position,
  typography
);

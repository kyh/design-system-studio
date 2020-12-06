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

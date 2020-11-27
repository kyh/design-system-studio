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
} from "@xstyled/system";

export type TypographyFunctionsProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxesProps &
  PositionProps &
  TypographyProps;

export const typographyFunctions = compose(
  space,
  color,
  layout,
  flexboxes,
  position,
  typography
);

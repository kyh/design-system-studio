import styled, { CSSObject } from "styled-components";
import {
  compose,
  space,
  layout,
  flexbox,
  border,
  position,
  color,
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
} from "styled-system";

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  BorderProps &
  PositionProps;

const baseStyles: CSSObject = {
  boxSizing: "border-box",
  minWidth: 0,
};

export const Box = styled.div<BoxProps>(
  baseStyles,
  compose(space, color, layout, flexbox, border, position)
);

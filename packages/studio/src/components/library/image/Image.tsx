import styled from "@xstyled/styled-components";
import {
  compose,
  space,
  layout,
  flexboxes,
  border,
  position,
  SpaceProps,
  LayoutProps,
  FlexboxesProps,
  BorderProps,
  PositionProps,
} from "@xstyled/system";

export type ImageProps = SpaceProps &
  LayoutProps &
  FlexboxesProps &
  BorderProps &
  PositionProps;

export const Image = styled.img<ImageProps>`
  max-width: 100%;
  height: auto;
  ${compose(space, layout, flexboxes, border, position)}
`;

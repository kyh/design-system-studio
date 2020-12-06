import styled from "@xstyled/styled-components";
import {
  compose,
  flexboxes,
  FlexboxesProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "@xstyled/system";

type DefaultProps = {};

type StyledProps = FlexboxesProps &
  LayoutProps &
  PositionProps &
  SpaceProps &
  DefaultProps;

export const ButtonGroup = styled.div<StyledProps>`
  /** generated */
  > button {
    border-radius: 0;
    &:first-child {
      border-top-left-radius: sm;
      border-bottom-left-radius: sm;
    }
    &:last-child {
      border-top-right-radius: sm;
      border-bottom-right-radius: sm;
    }
    &:focus {
      z-index: 1;
    }
  }
  ${compose(flexboxes, layout, position, space)}
`;

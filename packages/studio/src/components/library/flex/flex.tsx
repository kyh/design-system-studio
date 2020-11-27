import styled, { Box } from "@xstyled/styled-components";
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxesProps,
  BorderProps,
  PositionProps,
} from "@xstyled/system";

export type FlexProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxesProps &
  BorderProps &
  PositionProps;

export const Flex = styled(Box)<FlexProps>`
  display: flex;
`;

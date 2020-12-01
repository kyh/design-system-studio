import styled, { css, Box } from "@xstyled/styled-components";
import {
  SpaceProps,
  LayoutProps,
  BorderProps,
  PositionProps,
} from "@xstyled/system";

export type TabsProps = SpaceProps & LayoutProps & BorderProps & PositionProps;

// generated
const tabsBase = css`
  display: flex;
  align-items: center;
`;

export const Tabs = styled(Box)<TabsProps>`
  ${tabsBase}
`;

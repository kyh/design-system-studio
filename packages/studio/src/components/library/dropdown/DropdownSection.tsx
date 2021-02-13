import styled, { css, system, SystemProps } from "@xstyled/styled-components";
import { th } from "@xstyled/system";

type DefaultProps = { divider?: boolean };
type Props = SystemProps & DefaultProps;

export const DropdownBody = styled.section<DefaultProps>`
  padding: xl;
  ${({ divider }) =>
    divider &&
    css`
      border-bottom-style: solid;
      border-bottom-width: normal;
      border-color: borderColor;
    `}
  ${system}
`;

export const MenuItemContainer = styled.section<DefaultProps>`
  margin: md 0;
  ${({ divider }) =>
    divider &&
    css`
      border-bottom-style: solid;
      border-bottom-width: normal;
      border-color: borderColor;
    `}
  ${system}
`;

export const MenuItemHeader = styled.header<Props>`
  color: textLighter;
  font-size: subHeading;
  line-height: subHeading;
  font-weight: medium;
  padding: md xl;
`;

export const MenuItem = styled.button<Props>`
  display: flex;
  width: 100%;
  padding: md xl;
  transition: ${th("transitions.fast")};
  transition-property: background-color, box-shadow;
  &:hover {
    background-color: background;
  }
  &:focus,
  &:active {
    background-color: primaryBackground;
    box-shadow: inset 3px 0 0 0 ${th("colors.primary")};
    outline: none;
  }
  &:disabled {
    color: textLighter;
    background-color: backgroundLight;
  }
  ${system}
`;

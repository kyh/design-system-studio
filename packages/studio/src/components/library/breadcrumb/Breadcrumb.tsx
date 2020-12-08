import styled, { css, system, SystemProps } from "@xstyled/styled-components";
import { th } from "@xstyled/system";

type DefaultProps = { active?: boolean };
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  /* generated */
  position: relative;
  color: textLighter;
  padding: xs sm;
  border-radius: sm;
  margin-right: md;
  transition: ${th("transitions.fast")};
  transition-property: color, background-color;
  &:hover {
    color: primary;
    background-color: background;
    cursor: pointer;
  }
  &:active,
  &:focus {
    box-shadow: 0 0 0 2px ${th("colors.primary")};
  }
  ${({ active }) =>
    active &&
    css`
      color: text;
      &:hover {
        color: text;
        background-color: transparent;
        cursor: text;
      }
      &:active,
      &:focus {
        box-shadow: none;
      }
    `}
`;

export const Breadcrumb = styled.a<Props>`
  ${base}
  ${system}
`;

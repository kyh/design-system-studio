import styled, { css, system, SystemProps } from "@xstyled/styled-components";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  height: fit-content;
  /** generated */
  background-color: backgroundLighter;
  box-shadow: lg;
  border-style: solid;
  border-radius: sm;
  border-width: normal;
  border-color: borderColor;
`;

export const Dropdown = styled.section<Props>`
  ${base}
  ${system}
`;

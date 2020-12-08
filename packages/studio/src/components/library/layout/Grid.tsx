import styled, { css, system, SystemProps } from "@xstyled/styled-components";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  display: grid;
`;

export const Grid = styled.section<Props>`
  ${base}
  ${system}
`;

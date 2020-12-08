import styled, { css, system, SystemProps } from "@xstyled/styled-components";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  display: block;
`;

export const Box = styled.section<Props>`
  ${base}
  ${system}
`;

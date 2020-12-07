import styled, { css, system, SystemProps } from "@xstyled/styled-components";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  max-width: 100%;
  height: auto;
  /* generated */
`;

export const Image = styled.img<Props>`
  ${base}
  ${system}
`;

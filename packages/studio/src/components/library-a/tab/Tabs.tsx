import styled, { css, system, SystemProps } from "@xstyled/styled-components";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  /** generated */
  display: flex;
  align-items: center;
`;

export const Tabs = styled.nav<Props>`
  ${base}
  ${system}
`;

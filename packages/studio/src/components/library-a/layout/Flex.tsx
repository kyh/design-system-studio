import styled, { css, system, SystemProps } from "@xstyled/styled-components";

type DefaultProps = {};
type Props = SystemProps & DefaultProps;

const base = css<Props>`
  display: flex;
`;

export const Flex = styled.section<Props>`
  ${base}
  ${system}
`;

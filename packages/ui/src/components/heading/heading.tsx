import styled, { css } from "styled-components";
import { variant } from "styled-system";
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from "util/system-functions";

type HeadingProps = {
  variant?: string;
} & TypographyFunctionsProps;

const base = ({ theme }: any) =>
  css`
    margin: 0;
    ${theme.heading.base}
  `;

const variants = variant({ scale: "heading.variants" });

export const Heading = styled.h1<HeadingProps>`
  ${base}
  ${variants}
  ${typographyFunctions}
`;

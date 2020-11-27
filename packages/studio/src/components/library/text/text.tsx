import styled, { css } from "styled-components";
import { variant } from "styled-system";
import {
  TypographyFunctionsProps,
  typographyFunctions,
} from "../system-functions";

export type TextProps = {
  variant?: string;
} & TypographyFunctionsProps;

const base = ({ theme }: any) =>
  css`
    margin: 0;
    ${theme.text.base}
  `;

const variants = variant({ scale: "text.variants" });

export const Text = styled.p<TextProps>`
  ${base}
  ${typographyFunctions}
  ${variants}
`;

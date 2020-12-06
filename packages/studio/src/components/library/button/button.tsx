import React, { forwardRef } from "react";
import styled, { css, StyledComponentProps } from "@xstyled/styled-components";
import { th, variant as createVariants } from "@xstyled/system";
import { system, SystemProps } from "../system-functions";
import { Flex } from "../flex";

type DefaultProps = {
  loading?: boolean;
  disabled?: boolean;
  selected?: boolean;
  variant?: "default" | "primary" | "important" | "transparent" | "link";
};
type StyledProps = SystemProps & DefaultProps;

const base = css<StyledProps>`
  position: relative;
  white-space: nowrap;
  vertical-align: middle;
  display: inline-block;
  cursor: pointer;
  user-select: none;
  appearance: none;
  text-decoration: none;
  text-align: center;
  &:hover {
    text-decoration: none;
  }
  &:focus {
    outline: none;
  }
  &:disabled {
    cursor: default;
  }
  &:disabled svg {
    opacity: 0.6;
  }
  /* generated */
  font-family: body;
  font-size: body;
  line-height: body;
  font-weight: normal;
  border-style: solid;
  border-radius: sm;
  border-width: normal;
  padding: sm md;
  transition: ${th("transitions.fast")};
  transition-property: color, background-color, border-color, box-shadow;
`;

const variant = createVariants({
  key: "buttons.variant",
  prop: "variant",
  default: "default",
  variants: {
    default: css`
      color: text;
      background-color: backgroundLighter;
      background-image: ${th("gradients.light")};
      border-color: borderColor;
      transition-property: color, border-color, box-shadow;
      &:hover {
        background-color: background;
        background-image: none;
        border-color: borderColor;
      }
      &:active {
        background-color: background;
        background-image: none;
        border-color: primary;
      }
      &:focus {
        background-color: background;
        background-image: none;
        border-color: primary;
        box-shadow: 0 0 0 1px ${th("colors.primary")};
      }
      &:disabled {
        background-color: backgroundLighter;
        background-image: ${th("gradients.light")};
        border-color: borderColor;
        box-shadow: none;
        cursor: not-allowed;
      }
    `,
    primary: css`
      color: textInverse;
      background-color: primary;
      border-color: primaryDark;
      &:hover {
        background-color: primaryDark;
        border-color: primaryDarker;
      }
      &:active {
        background-color: primaryDarker;
        border-color: primaryDarker;
      }
      &:focus {
        background-color: primary;
        border-color: primaryDarker;
        box-shadow: 0 0 0 1px ${th("colors.primaryDarker")};
      }
      &:disabled {
        background-color: primaryLighter;
        border-color: primaryLight;
        box-shadow: none;
        cursor: not-allowed;
      }
    `,
    important: css`
      color: textInverse;
      background-color: error;
      border-color: errorDark;
      &:hover {
        background-color: errorDark;
        border-color: errorDarker;
      }
      &:active {
        background-color: errorDarker;
        border-color: errorDarker;
      }
      &:focus {
        background-color: error;
        border-color: errorDarker;
        box-shadow: 0 0 0 1px ${th("colors.errorDarker")};
      }
      &:disabled {
        background-color: errorLighter;
        border-color: errorLight;
        box-shadow: none;
        cursor: not-allowed;
      }
    `,
    transparent: css`
      color: text;
      background-color: transparent;
      border-color: transparent;
      &:hover {
        color: primary;
        background-color: background;
      }
      &:active {
        color: primary;
      }
      &:focus {
        border-color: primaryDarker;
        box-shadow: 0 0 0 1px ${th("colors.primaryDarker")};
      }
      &:disabled {
        color: textLighter;
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
        cursor: not-allowed;
      }
    `,
    link: css`
      color: primary;
      background-color: transparent;
      border-color: transparent;
      padding: 0 2px;
      &:hover {
        color: primaryDark;
      }
      &:active {
        color: primary;
      }
      &:focus {
        border-color: primary;
      }
      &:disabled {
        color: textLighter;
        background-color: transparent;
        border-color: transparent;
        box-shadow: none;
        cursor: not-allowed;
      }
    `,
  },
});

type Props = StyledComponentProps<"button", any, StyledProps, never>;

export const StyledButton = styled.button<Props>`
  ${base}
  ${system}
  /* generated */
  ${variant}
`;

export const Button = forwardRef<HTMLButtonElement, Props>(
  ({ disabled, loading, children, ...props }, ref) => (
    <StyledButton
      ref={ref}
      disabled={loading || disabled}
      loading={loading}
      {...props}
    >
      {loading && (
        <Flex
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          size="body"
        >
          Loading...
        </Flex>
      )}
      <Flex
        alignItems="center"
        position="relative"
        justifyContent="center"
        opacity={loading ? 0 : 1}
      >
        {children}
      </Flex>
    </StyledButton>
  )
);

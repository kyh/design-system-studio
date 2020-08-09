import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import {
  compose,
  variant,
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  position,
  PositionProps,
  space,
  SpaceProps,
} from "styled-system";
import { Flex } from "../flex";
import { Spinner } from "../spinner";

type DefaultProps = {
  isLoading?: boolean;
  disabled?: boolean;
  variant?: "basic" | "primary" | "transparent" | "link";
};

export type StyledButtonProps = SpaceProps &
  LayoutProps &
  FlexboxProps &
  PositionProps &
  DefaultProps;

/** Generated code */
const buttonBaseStyles = {
  position: "relative",
  fontFamily: "body",
  fontSize: "body",
  fontWeight: "regular",
  lineHeight: "body",
  borderRadius: "regular",
  borderWidth: "regular",
  borderStyle: "regular",
  pt: 2,
  pb: 2,
  pl: 3,
  pr: 3,
  cursor: "pointer",
};

export const buttonVariants = {
  basic: {
    ...buttonBaseStyles,
    color: "page.colorInverse",
    backgroundColor: "default.gradients.base",
    borderColor: "default.base",
    "&.hover, &:hover": {
      backgroundColor: "default.light",
      borderColor: "default.base",
    },
    "&.active, &:active": {
      backgroundColor: "default.light",
      borderColor: "default.dark",
    },
    "&.focus, &:focus": {
      backgroundColor: "default.gradients.base",
      borderColor: "primary.base",
    },
    "&.disabled, &:disabled": {
      backgroundColor: "default.gradients.light",
      borderColor: "default.base",
      cursor: "not-allowed",
    },
    "&.loading, &:loading": {
      backgroundColor: "default.gradients.light",
      borderColor: "default.base",
      cursor: "not-allowed",
    },
  },
  primary: {
    ...buttonBaseStyles,
    color: "page.colorInverse",
    backgroundColor: "primary.base",
    borderColor: "primary.dark",
    "&.hover, &:hover": {
      backgroundColor: "primary.dark",
      borderColor: "primary.border",
    },
    "&.active, &:active": {
      backgroundColor: "primary.border",
      borderColor: "primary.border",
    },
    "&.focus, &:focus": {
      backgroundColor: "primary.base",
      borderColor: "primary.border",
    },
    "&.disabled, &:disabled": {
      backgroundColor: "primary.background",
      borderColor: "primary.light",
      cursor: "not-allowed",
    },
    "&.loading, &:loading": {
      backgroundColor: "primary.background",
      borderColor: "primary.light",
      cursor: "not-allowed",
    },
  },
};
/** End generated code */

const variants = variant({
  scale: "buttons",
  variants: buttonVariants,
});

const StyledButton = styled.button<ButtonProps>`
  ${variants}
  ${compose(space, layout, flexbox, position)}
`;

export type ButtonProps = StyledComponentProps<
  "button",
  any,
  StyledButtonProps,
  never
>;

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, isLoading, children, ...props }, ref) => (
    <StyledButton
      ref={ref}
      disabled={isLoading || disabled}
      isLoading={isLoading}
      {...props}
    >
      {isLoading && (
        <Spinner
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          right={0}
          bottom={0}
          left={0}
          size="body"
        />
      )}
      <Flex
        alignItems="center"
        position="relative"
        justifyContent="center"
        opacity={isLoading ? 0 : 1}
      >
        {children}
      </Flex>
    </StyledButton>
  )
);

Button.defaultProps = {
  variant: "basic",
};

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
    color: "ui.color",
    backgroundColor: "brand.blue.300",
    borderColor: "brand.blue.400",
  },
  primary: {
    ...buttonBaseStyles,
    color: "brand.neutrals.10",
    backgroundColor: "brand.blue.300",
    borderColor: "brand.blue.400",
    "&:hover": {
      backgroundColor: "brand.blue.400",
      borderColor: "brand.blue.500",
    },
    "&:active": {
      backgroundColor: "brand.blue.500",
      borderColor: "brand.blue.500",
    },
    "&:focus": {
      backgroundColor: "brand.blue.300",
      borderColor: "brand.blue.500",
    },
    "&:disabled": {
      backgroundColor: "brand.blue.75",
      borderColor: "brand.blue.100",
      cursor: "not-allowed",
    },
    "&:loading": {
      backgroundColor: "brand.blue.75",
      borderColor: "brand.blue.100",
      cursor: "not-allowed",
    },
  },
  transparent: {
    ...buttonBaseStyles,
    color: "brand.blue.300",
    backgroundColor: "transparent",
    borderColor: "transparent",
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

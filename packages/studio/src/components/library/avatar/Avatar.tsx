import React, { forwardRef } from "react";
import styled, { css, StyledComponentProps } from "@xstyled/styled-components";
import { th, variant as createVariants } from "@xstyled/system";
import { system, SystemProps } from "../system-functions";

type DefaultProps = {
  loading?: boolean;
  username?: string;
  src?: string;
  shape?: "round" | "square"; // generated
  size?: "sm" | "md" | "lg"; // generated
};
type StyledProps = SystemProps & DefaultProps;
type Props = StyledComponentProps<"div", any, StyledProps, never>;

const base = css<StyledProps>`
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    display: block;
  }
  /* generated */
  background-color: background;
  text-transform: uppercase;
  text-align: center;
`;

/* generated */
const shape = createVariants({
  key: "avatar.shape",
  prop: "shape",
  default: "round",
  variants: {
    round: css`
      border-radius: round;
    `,
    square: css`
      border-radius: none;
    `,
  },
});

/* generated */
const size = createVariants({
  key: "avatar.size",
  prop: "size",
  default: "md",
  variants: {
    sm: css`
      width: lg;
      height: lg;
      line-height: ${th("sizes.lg")};
    `,
    md: css`
      width: xl;
      height: xl;
      line-height: ${th("sizes.xl")};
    `,
    lg: css`
      width: xl40;
      height: xl40;
      line-height: ${th("sizes.xl40")};
    `,
  },
});

const StyledContainer = styled.div<Props>`
  ${base}
  ${system}
  /* generated */
  ${shape}
  ${size}
`;

export const Avatar = forwardRef<HTMLDivElement, Props>(
  ({ loading = false, username = "", src = "", ...props }, ref) => {
    let avatarFigure = <div />;
    const a11yProps: Record<string, any> = {};

    if (loading) {
      a11yProps["aria-busy"] = true;
      a11yProps["aria-label"] = "Loading avatar...";
    } else if (src) {
      avatarFigure = <img src={src} alt={username} />;
    } else {
      a11yProps["aria-label"] = username;
      avatarFigure = <div aria-hidden="true">{username.substring(0, 1)}</div>;
    }

    return (
      <StyledContainer ref={ref} loading={loading} {...a11yProps} {...props}>
        {avatarFigure}
      </StyledContainer>
    );
  }
);

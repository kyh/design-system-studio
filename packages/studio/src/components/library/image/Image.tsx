import styled from "@xstyled/styled-components";
import {
  compose,
  variant,
  space,
  layout,
  flexboxes,
  border,
  position,
  SpaceProps,
  LayoutProps,
  FlexboxesProps,
  BorderProps,
  PositionProps,
} from "@xstyled/system";

export type ImageProps = { variant?: "default" | "avatar" } & SpaceProps &
  LayoutProps &
  FlexboxesProps &
  BorderProps &
  PositionProps;

const imageVariants = variant({
  variants: {
    default: {},
    avatar: {
      width: 3,
      height: 3,
      borderRadius: 999999,
    },
  },
});

export const Image = styled.img<ImageProps>(
  {
    maxWidth: "100%",
    height: "auto",
  },
  compose(space, layout, flexboxes, border, position),
  imageVariants
);

Image.defaultProps = {
  variant: "default",
};

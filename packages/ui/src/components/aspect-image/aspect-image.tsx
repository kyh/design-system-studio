import React, { forwardRef } from "react";
import styled, { StyledComponentProps } from "styled-components";
import { Image, ImageProps } from "../image";
import { AspectRatio } from "../aspect-ratio";

const CoverImage = styled(Image)<ImageProps>({
  objectFit: "cover",
  objectPosition: "center",
});

type DefaultProps = {
  ratio?: number;
};

type CoverImageProps = StyledComponentProps<
  "img",
  any,
  DefaultProps & ImageProps,
  never
>;

export const AspectImage = forwardRef<HTMLImageElement, CoverImageProps>(
  ({ ratio, children, ...props }, ref) => (
    <AspectRatio ratio={ratio}>
      <CoverImage ref={ref} {...props} />
    </AspectRatio>
  )
);

AspectImage.defaultProps = {
  ratio: 1 / 1,
};

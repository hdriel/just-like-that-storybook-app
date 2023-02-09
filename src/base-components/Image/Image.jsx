import React from "react";
import PropTypes from "prop-types";
import { ImageStyled } from "./Image.styled";

export default function Image({ onClick, src, alt, width, height }) {
  return (
    <ImageStyled
      onClick={onClick}
      src={src}
      alt={alt}
      width={width}
      height={height}
    />
  );
}

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  onClick: PropTypes.func,
};

Image.defaultProps = {
  alt: "my-image",
  width: undefined,
  height: undefined,
  onClick: undefined,
};

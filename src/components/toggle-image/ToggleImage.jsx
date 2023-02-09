import React from "react";
import PropTypes from "prop-types";
import notFoundImage from "../../assets/cancel.png";

import Image from "../../base-components/Image/Image";

export default function ToggleImage({ images, imageIndex, onClick }) {
  const image = images[imageIndex % images.length];

  return image ? (
    <Image
      src={image.src}
      width={image.width}
      height={image.height}
      onClick={() => onClick?.(imageIndex)}
    />
  ) : (
    <Image
      src={notFoundImage}
      width={150}
      height={150}
      onClick={() => onClick?.(imageIndex)}
    />
  );
}

ToggleImage.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ),
  imageIndex: PropTypes.number,
  onClick: PropTypes.func,
};

ToggleImage.defaultProps = {
  images: [],
  imageIndex: 0,
  onClick: undefined,
};

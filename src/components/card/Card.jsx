import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import { Root, ImageContainer, InputContainer } from "./Card.styled";
import SurpriseInput from "../surprise-input/SurpriseInput";
import ToggleImage from "../toggle-image/ToggleImage";

export default function Card({ surprises, images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [value, setValue] = useState("");
  const [surprise, setSurprise] = useState(null);

  const onChange = (event) => {
    setSurprise(null);
    setValue(event.target.value);
  };

  const onSurprise = (surprise) => {
    setSurprise(surprise);
  };

  useEffect(() => {
    setImageIndex(surprise?.imageIndex ?? 0);
  }, [surprise]);

  return (
    <Root>
      <ImageContainer>
        <ToggleImage images={images} imageIndex={imageIndex} />
      </ImageContainer>
      <InputContainer>
        <SurpriseInput
          label="Surprise Input"
          placeholder="guess my name"
          value={value}
          surpriseInputs={surprises}
          onSurprise={onSurprise}
          onChange={onChange}
        />
      </InputContainer>
    </Root>
  );
}

Card.propTypes = {
  surprises: PropTypes.arrayOf(
    PropTypes.shape({ name: PropTypes.string, color: PropTypes.string })
  ),
  images: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
    })
  ),
};

Card.defaultProps = {
  surprises: [],
  images: [],
};
